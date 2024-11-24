import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../types/types";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>({
    id: 0,
    title: 'string',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  })

  const getProduct = (id: string) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  };


  useEffect(() => {
    getProduct(id as string);
  }, [id]);



  return (
    <div className='lesson-container'>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img width={200} src={product.image} alt="" />
      <Link to={'../products'}>back to products</Link>
    </div>
  );
}
