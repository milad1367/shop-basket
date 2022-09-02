import { useDispatch } from "react-redux";
import useTimeout from "../../../hooks/useInterval";
import { removeProduct } from "../../../state/basketSlice";
import TrashIcon from "../../../assets/svgs/trash.svg";
import Amount from "../../../components/Amount";
import "./index.scss";

interface IBasketItem {
  data: any;
  isLastItem: boolean;
}
export default function BasketItem({ data, isLastItem }: IBasketItem) {
  const { name, price, poster, orderLimitTime, id } = data;
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeProduct(id));
  };
  useTimeout(onRemove, orderLimitTime);
  return (
    <div className="basket-item">
      <div className="basket-item-container">
        <div className="row">
          <div className="basket-item-left">
            <div className="basket-item-left-items">
              <div className="basket-item-left-img">
                <img alt="img" src={poster} />
              </div>
              <button className="basket-item-left-button" onClick={onRemove}>
                <img alt="trash" src={TrashIcon} />
              </button>
            </div>
          </div>
          <div className="basket-item-right">
            <div className="basket-item-right-name">{name}</div>
            <Amount price={price} currency="USD" />
          </div>
        </div>
      </div>
      {!isLastItem && (
        <div className="basket-item-divider">
          <div className="basket-item-divider-item"></div>
        </div>
      )}
    </div>
  );
}
