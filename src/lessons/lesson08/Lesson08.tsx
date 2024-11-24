import { useEffect, useState } from 'react';
import Counter from "../../components/counter/Counter";
import MyButton from "../../components/myButton/MyButton";
import FetchDog from "../../components/fetchDog/FetchDog";

export default function Lesson08(): JSX.Element {
  console.log('render lesson08!');

  // переменная состояния переключатель с true на false
  const [toggle, setToggle] = useState(false);

  // функция переключающая состояние toggle на противоположное (!toggle)
  const handleToggle = (): void => {
    setToggle(!toggle);
    // setToggle(!toggle);
    // setToggle(!toggle);
  };

  // ! действие, которое мы поместили в usEffect() мы спрятали от многократного повторения при обновлении компонента

  // * если указать вторым параметром пустой массив - действие отработает только один раз в начале жизненного цикла компонента

  useEffect(() => {
    // * эта строчка отработает только в начале жизненного цикла компонента
    console.log('render useEffect()');
  }, []);

  return (
    <div className="lesson-container">
      <h2>Lesson 08</h2>
      <p>UseEffect() hook</p>
      <p>Этот хук позволяет нам изолировать вычисления от многократного повторения при обновлении компонента </p>
      <ol>
        <li>стрелочная функция с действием для выполнения</li>
        <li>массив зависимостей (данные при изменении которых ,будет отрабатывать), пустой массив означает что действие сработает при mounting компонента (в начале жизненного цикла)</li>
      </ol>
      <span>State: {`${toggle}`}</span>
      <MyButton func={handleToggle} isDanger={false} text={'change state'} />
      <p>Мы можем проследить как Counter проходит все 3 этапа жизненного цикла</p>
      {/* если в toggle true мы покажем компонент на странице */}
      {toggle && (
        <Counter />
      )}
      <FetchDog/>
    </div>
  );
}

