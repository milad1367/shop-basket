import { useDispatch } from "react-redux";
import useTimeout from "../../hooks/useInterval";
import { removeProduct } from "../../state/basketSlice";

import "./index.scss";

interface IBasketItem {
  data: any;
}
export default function BasketItem({ data }: IBasketItem) {
  const { name, price, poster, orderLimitTime, id } = data;
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeProduct(id));
  };
  useTimeout(onRemove, orderLimitTime);
  return (
    <div className="basket-item">
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
