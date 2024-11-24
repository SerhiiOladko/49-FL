import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css";

function LoginForm() {
  return (
    <form className="login-form">
      <MyInput type={"text"} label={"Type your login:"} placeholder={"login"} />
      <MyInput type={"email"} label={"Type your email:"} placeholder={"email"} />
      <MyInput type={"password"} label={"Type your pass:"} placeholder={"password"} />
      <MyButton type={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
}

export default LoginForm;
