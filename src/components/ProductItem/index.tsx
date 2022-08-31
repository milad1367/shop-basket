import { useDispatch } from "react-redux";
import { addProduct } from "../../state/basketSlice";

import "./index.scss";

interface IData {
  name: string;
  price: string;
  poster: string;
  orderLimitTime: string;
}
interface IProductItem {
  data: IData;
}
export default function ProductItem({ data }: IProductItem) {
  const { name, price, poster, orderLimitTime } = data;
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(addProduct(name, orderLimitTime, price));
  };
  return (
    <div className="product">
      <div>
        <img alt="test" src={poster} />
      </div>
      <div>{name}</div>
      <div>{orderLimitTime}</div>
      <div>{price}</div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
