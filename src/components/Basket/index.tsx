import { selectBasket } from "../../state/basketSlice";
import { useAppSelector } from "../../state/hooks";
import BasketItem from "../BasketItem";

import "./index.scss";

export default function Basket() {
  const basketItems = useAppSelector(selectBasket);
  console.log(basketItems);
  return (
    <div className="basket">
      Basket:
      {basketItems.map((item: any) => (
        <BasketItem key={item.id} data={item} />
      ))}
      {!basketItems.length && <div>Your basket is empty</div>}
    </div>
  );
}
