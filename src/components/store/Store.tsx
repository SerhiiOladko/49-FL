import { useEffect, useState } from "react";
import { IStoreProduct } from "../../types/types";
import StoreCard from "../storeCard/StoreCard";
import styles from './store.module.css';
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";

export default function Store() {
  // * переменная состояния для данных с сервера
  const [storeProducts, setStoreProducts] = useState<IStoreProduct[]>([]);


  const formik = useFormik({
    initialValues: {
      amount: ''
    },
    onSubmit: (values, {resetForm}) => {
      getStoreAmountProducts(values.amount)
      resetForm()
      console.log(values)
    }
  })


  // * асинхронная функция запрашивающая данные с сервера
  const getStoreProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setStoreProducts(data.products);
  };

  // ! функция с запросом на ограниченное число товаров
  const getStoreAmountProducts = async (amount: string) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${amount}`);
    const data = await res.json();
    setStoreProducts(data.products);
  };

  // оборачиваем вызов функции в useEffect, чтобы избежать не нужных обновлений компонента
  useEffect(() => {
    getStoreProducts();
  }, []);

  return (
    <div className="lesson-container">
      {/* <h2>Store 🛍️</h2> */}



      <form onSubmit={formik.handleSubmit}>
        <input placeholder="type amount" value={formik.values.amount} onChange={formik.handleChange} name="amount" type="text" />
        <MyButton text="upload" myType="submit"/>
      </form>




      <div className={styles.storeGrid}>
        {/* выводим данные на странице */}
        {storeProducts.map(product => (
          <StoreCard key={product.id} id={product.id} title={product.title} price={product.price} images={product.images} thumbnail={product.images[0]} />
        ))}
      </div>
    </div>
  );
}

