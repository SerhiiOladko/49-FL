import "./myInput.css";

function MyInput({ name, type = "text", placeholder = "default text", label = "default label" }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input placeholder={placeholder} type={type} name={name} />
    </>
  );
}

export default MyInput;
