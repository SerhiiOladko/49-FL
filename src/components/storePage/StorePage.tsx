import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { IStoreProduct } from "../../types/types";
import styles from './storePage.module.css'

const initialState: IStoreProduct = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  tags: [],
  brand: "",
  sku: "",
  weight: 0,
  dimensions: {
    width: 0,
    height: 0,
    depth: 0
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  reviews: [],
  returnPolicy: "",
  minimumOrderQuantity: 0,
  meta: {
    createdAt: "",
    updatedAt: "",
    barcode: "",
    qrCode: ""
  },
  images: [],
  thumbnail: ""
};

export default function StorePage() {
  const { id } = useParams();

  const [storeProduct, setStoreProduct] = useState<IStoreProduct>(initialState);

  const getStoreProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setStoreProduct(data);
  };

  useEffect(() => {
    getStoreProduct(id as string);
  }, [id]);


  return (
    <div className={styles.productPage}>
      {/* ! в тернарном операторе проверяем приходят ли данные по продуктам и если нет сообщаем пользователю что данные не пришли */}
      {storeProduct.images ?
        //  если данные пришли мы их выводим
        <>
          <h2>{storeProduct.title}</h2>
          <img width={'300px'} src={storeProduct.images[0]} alt="" />
          <p>{storeProduct.description}</p>
          <p>Price: {storeProduct.price.toFixed()}€</p>
          <div>
            {storeProduct.images.map((image, index) => (
              <img key={index} width={150} src={image} alt="" />
            ))}

          </div>
        </>
        :
        // если данных нет сообщаем пользователю
        <h2> Sorry, no such product 👾 </h2>
      }
    </div>
  );
}

