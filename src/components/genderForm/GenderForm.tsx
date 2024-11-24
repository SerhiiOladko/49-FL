import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import styles from './genderForm.module.css';

// * типизация данных в input
interface IFormData {
  name: string;
}

// * типизация данных с сервера
interface IGenderData {
  count: number,
  name: string,
  gender: string,
  probability: number;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .typeError('Ваше имя должно состоять из букв')
    .required('Поле обязательно к заполнению')
    .min(1, 'Ваше имя должно быть больше одного символа')
    .max(20, 'Слишком большое имя 😳')
    .matches(/^[A-Za-z\s]+$/, "Имя должно содержать только буквы и пробелы")
    .matches(/^[A-Z]/, "Имя должно начинаться с большой буквы")
});

export default function GenderForm() {

  // * переменная состояния для данных с сервера
  const [genderData, setGenderData] = useState<IGenderData>({
    count: 0,
    name: '',
    gender: '',
    probability: 0
  });

  // * функция обработчик для асинхронного запроса
  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);
    setGenderData(data);
  };

  // * объект с настройками формы
  const formik = useFormik({
    // начальные значения для формы
    initialValues: {
      name: ""
    } as IFormData,
    // отключаем валидацию по изменению input
    validateOnChange: false,
    // подключаем схему валидации
    validationSchema: schema,
    // действие, которое случится по нажатию кнопки с типом submit в форме
    onSubmit: (values: IFormData, { resetForm }) => {
      resetForm();
      fetchGender(values.name);
    }
  });



  return (
    <div className="lesson-container">
      <h5>Know your gender ✨</h5>

      <form className={styles.genderForm} onSubmit={formik.handleSubmit}>
        <label className={styles.error}>{formik.errors.name}</label>
        <input placeholder="type your name" onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
        <button type="submit">send request</button>
      </form>

      {genderData.name && (
        <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
      )}
    </div>
  );
}


