import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import MyButton from "../myButton/MyButton";
import styles from './ShopProduct.module.css';

interface IShopProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function ShopProduct({ id, title, image, price }: IShopProductProps) {
  // ! мы обращаемся к контексту корзины и забираем функцию добавления
  const { addToCart } = useCart();

  // передаем в корзину объект с данными по продукту
  const addToCartFromProduct = () => {
    addToCart({ id, price, title, quantity: 1 });
  };


  return (
    <div className={styles.shopContainerCard} key={id}>
      <h3>{title}</h3>
      <div className={styles.imgWrapper}>
        <img src={image} alt="" />
      </div>
      <div>
        <MyButton func={addToCartFromProduct} text="add to cart" isDanger={false} />
        <Link to={String(id)}><MyButton text="To product" /></Link>
      </div>
    </div>
  );
}
