import { useState } from "react";
import MyButton from "../myButton/MyButton";

// let count = 0
function Feedback() {


  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  const handleDislike = () => {
    setDislike(dislike  => dislike + 1)
  }

  const handleLike = () => {
    setLike(like => like + 1)
    // count++
    // console.log('count', count)
  }

  const handleReset = () => {
    setLike(0)
    setDislike(0)
  }

  // console.log('render feedback!')
  // console.log('count', count)

  return (
    <div className="lesson-container">
      <div>
        <span>{dislike}</span>
        <MyButton func={handleDislike} text={"Dislike"} />
        <MyButton func={handleLike} isDanger={false} text={"Like"} />
        <span>{like}</span>
      </div>
      <MyButton func={handleReset} text={"Reset Results"} />
    </div>
  );
}

export default Feedback;
