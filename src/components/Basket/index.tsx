import BasketItem from "../BasketItem";
import "./index.scss";

interface IBasket {
  items: any[];
}
export default function Basket({ items }: IBasket) {
  return (
    <div className="basket">
      Basket:
      {items.map((item: any) => (
        <BasketItem data={item} />
      ))}
      {!items.length && <div>Your basket is empty</div>}
    </div>
  );
}
