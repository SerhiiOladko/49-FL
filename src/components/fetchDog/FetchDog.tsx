import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from './fetchDog.module.css';

// протипизировали данные с сервера
interface IDogData {
  message: string;
  status: string;
}

export default function FetchDog(): JSX.Element {

  // завели state для изменяемых данных
  const [dogImg, setDogImg] = useState<string>('');

  // функция обновляющая state
  const fetchDog = (): void => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data: IDogData): void => {
        setDogImg(data.message);
      });
  };

  // ! fetchDog(); - вызов функции изменяющей state без useEffect() вызовет бесконечный ререндр компонента

  // * вызов внутри useEffect случится только при начале жизненного цикла (один раз за цикл)
  useEffect(() => {
    console.log('useEffect from fetch dog!');
    fetchDog();
  }, []);


  return (
    <div className="lesson-container">
      {dogImg && (
        <>
          <h3>Fetch dog 🐶</h3>
          <div className={styles.imgWrapper}>
            <img src={dogImg} alt="" />
          </div>
          <MyButton func={fetchDog} text={'update dog'} />
        </>
      )}

    </div>
  );
}

