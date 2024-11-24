// импортируем картинку в переменной указав полный путь
import reactImg from '../../assets/reactImg.jpg';
import MyButton from "../../components/myButton/MyButton";
// подключение css файла из текущей папки
import './lesson02.css';
// функция-компонент должна называться с большой буквы
// имя файла тоже называется с большой буквы и совпадает с именем функции
function Lesson02():JSX.Element {
  // мы можем создать переменную с версткой и положить в нее тег li
  const element = <li>Element in variable</li>;
  // или мы можем создать переменную со строкой для тега в верстке
  const text = "Text for JSX tag";
  const company = "Facebook";

  interface IUser {
    firstName: string;
    lastname: string;
  }

  // объект с данными о пользователе
  const user: IUser = {
    firstName: 'Brendan',
    lastname: 'Eich'
  };

  // функция, обрабатывающая данные объекта
  function formatUser(name: IUser) {
    return name.firstName + ' ' + name.lastname;
  }

  // переменная от значения которой зависит отображение данных
  // на странице в тернарном операторе
  const isLoggedIn = false;


  return (
    <div className="lesson-container">
      <h3>Lesson 02</h3>
      <p>React JSX components</p>
      {/* для отображения такой переменной мы пишем ее в фигурных скобках */}
      <img className="react-img" src={reactImg} alt="reactImg" />
      <ul>
        <li>Simple text</li>
        {element}
        <li>{text}</li>
        <li>React was created by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        {/* пример использования тернарного оператора внутри тега */}
        <li>User {isLoggedIn ? 'is' : 'is NOT'} in the system</li>
      </ul>
      {/* импорт компонента-кнопки */}
      <MyButton />
    </div>
  );
}

// не забываем сделать export для связи с другими компонентами
export default Lesson02;
