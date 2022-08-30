// import { useDispatch } from "react-redux";
// import { selectBasket } from "../../state/basketSlice";
// import { useAppSelector } from "../../state/hooks";
import "./index.scss";

interface IBasketItem {
  data: any;
}
export default function BasketItem({ data }: IBasketItem) {
  const { name, price, poster, orderLimitTime } = data;
  const onRemove = () => {};
  return (
    <div>
      <div>BasketItem</div>
      <div>
        <img alt="" src={poster} />
      </div>
      <button onClick={onRemove}>remove</button>
      <div>{name}</div>
      <div>{price}</div>
      <div>{orderLimitTime}</div>
    </div>
  );
}
