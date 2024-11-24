import styles from "./myButton.module.css";
import cn from 'classnames'

interface IMyButtonProps {
  text?: string
  isDanger?: boolean
  myType?: "button" | "submit" | "reset"
  func?: () => void
}

const handleDefaultClick = () => {
  
};

function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Click",
  myType = 'button' }:IMyButtonProps) {
  return (
    // <button type={myType} onClick={func}
    // className={`my-button ${isDanger ? "btn-danger" : "btn-primary"}`}>
    //   {text}
    // </button>
    <button type={myType} onClick={func}
    className={cn(styles.myButton, {
      // если isDanger будет true
      // мы добавим styles.btnDanger
      // если false - класс добавлен не будет
      [styles.btnDanger]:isDanger,
      // каждое следующее условие мы указываем через запятую
      [styles.btnPrimary]:!isDanger
    })}>
      {text}
    </button>
  );
}

export default MyButton;
