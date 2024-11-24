import React from 'react'
// css модули мы импортируем в переменной
import styles from './lesson09.module.css'
import cn from 'classnames'
import MyButton from "../../components/myButton/MyButton";

export default function Lesson09() {
  // console.log(styles)
  return (
    <div className="lesson-container">
      <h2 className={styles.heading}>Lesson 09</h2>
      <p className={`${styles.desc} ${styles.boldText}`}>CSS modules - это способ, как мы можем изолированно работать со стилями css</p>
      <p className={styles.boldText}>Задачу добавления нескольких классов из css module можно решить разными способами</p>
      <ul>
        <li>конкатенация</li>
        <li>шаблонная строка</li>
        <li>библиотека classnames</li>
      </ul>
      <p className={cn(styles.desc, styles.boldText)}>Библиотеку classnames мы устанавливаем через команду 'npm i classnames' и импортируем в нужный компонент</p>
      <MyButton isDanger={false} text="css module кнопка"/>
    </div>
  )
}
