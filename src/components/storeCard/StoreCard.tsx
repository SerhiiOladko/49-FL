import { Link } from "react-router-dom";
import MyButton from "../myButton/MyButton";

interface IStoreCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  thumbnail: string;
}

export default function StoreCard({ id, price, title, images, thumbnail }: IStoreCardProps) {
  return (
    <Link to={String(id)}>
      <section>
        <h4>{title}</h4>
        <p>Price: {price.toFixed()}€</p>
        <div>
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <Link to={String(id)}> <MyButton isDanger={false} text="more info" /></Link>


      </section>
    </Link>
  );
}

