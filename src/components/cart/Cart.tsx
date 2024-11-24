import { useCart } from "../../context/cartContext";
import MyButton from "../myButton/MyButton";

export default function Cart() {
  // забираете данные из контекста
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="lesson-container">
      <h2>Shopping cart</h2>
      <ul>
        {cart.map(el => (
          <li key={el.id}>{el.title} quantity: {el.quantity}
            <MyButton text={"delete from cart"} func={() => removeFromCart(el.id)} /></li>
        ))}

      </ul>
      <div>
        <MyButton isDanger={false} text="clear cart" func={clearCart} />
      </div>
    </div>
  );
}
