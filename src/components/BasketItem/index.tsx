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
    </div>
  );
}
