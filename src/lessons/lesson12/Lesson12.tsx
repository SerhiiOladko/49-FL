import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from './lesson12.module.css';
import { useActionData, useNavigate } from "react-router-dom";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Lesson12() {
  // ! настроили метод навигации в react-router-dom
  const navigate = useNavigate()

  // ! мы вызываем функцию хук useFormik и передаем в нее объект с настройками  - результат кладем в переменную для дальнейшей работы
  const formik = useFormik({
    // начальные значения для формы
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as IFormValues,
    // действие, которое случится в форме по нажатию на кнопку с типом submit
    // за место values придут значения из формы
    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
      navigate('/')
      // navigate('../lesson-1')
    }
  });


  return (
    <div className="lesson-container">
      <h2>Formik</h2>
      <p>Formik - это библиотека для удобной работы с формами в React</p>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} value={formik.values.firstName} name="firstName" type="text" placeholder="имя" />
        <input onChange={formik.handleChange} value={formik.values.lastName} name="lastName" type="text" placeholder="фамилия" />
        <input onChange={formik.handleChange} value={formik.values.email} name="email" type="text" placeholder="email" />
        <MyButton myType="submit" text="отправить" />
      </form>
      <h3 style={{ marginTop: '15px' }}>Что нужно сделать чтобы форма заработала:</h3>
      <ol>
        <li>Установили formik через 'npm i formik'</li>
        <li>Создали переменную formik в которую присвоили результат вызова функции useFormik() с настройками в объекте</li>
        <li>В объекте два обязательных ключа: initialValues (начальные значения), onSubmit (функция, которая вызовется при нажатии на кнопку в форме)</li>
        <li>Для form добавляем в onSubmit formik.handleSubmit</li>
        <li>Для input добавляем в onChange formik.handleChange</li>
        <li>Для input в value добавляем его значение через formik.values</li>
        <li>Для input в поле name должен быть тот же ключ, что и в initialValues</li>
      </ol>
    </div>
  );
}
