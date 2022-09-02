import classNames from "classnames";
import { selectBasket } from "../../state/basketSlice";
import { useAppSelector } from "../../state/hooks";
import BasketItem from "../BasketItem";
import EmptyBasket from "../../assets/svgs/empty_basket.svg";
import "./index.scss";

export default function Basket() {
  const basketItems = useAppSelector(selectBasket);
  const basketClass = classNames({
    basket: true,
    "basket-empty": !basketItems.length,
  });
  return (
    <div className={basketClass}>
      <div className="basket-container">
        {basketItems.map((item: any, index: number) => (
          <BasketItem
            isLastItem={Number(basketItems.length) - 1 === index}
            key={item.id}
            data={item}
          />
        ))}
      </div>
      {!basketItems.length && (
        <div className="basket-empty-items">
          <div className="basket-empty-img">
            <img alt="basket_empty" src={EmptyBasket} />
          </div>
          <div className="basket-empty-text">Your basket is empty</div>
        </div>
      )}
    </div>
  );
}
