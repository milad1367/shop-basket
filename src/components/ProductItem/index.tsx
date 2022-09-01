import { useDispatch } from "react-redux";
import { addProduct } from "../../state/basketSlice";
import RepeatMusicIcon from "../../assets/svgs/repeat_music.svg";
import Amount from "../Amount";
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
    dispatch(
      addProduct(name, (Number(orderLimitTime) * 60).toString(), price, poster)
    );
  };
  return (
    <div className="product">
      <div className="product-img">
        <img alt="test" width={160} height={160} src={poster} />
        <div className="product-img-time">
          <img width={16} height={16} alt="remove_time" src={RepeatMusicIcon} />
          <div className="product-img-time-value">
            {Number(orderLimitTime) / 1000} min
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="product-details-name">{name}</div>
        <div className="product-details-amount">
          <Amount price={price} currency="USD" />
        </div>
        <button className="product-details-button" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
    </div>
  );
}
