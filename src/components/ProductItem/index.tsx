import "./index.scss";
interface IProductItem {
  data: any;
}
export default function ProductItem({ data }: IProductItem) {
  const { name, price, poster, orderLimitTime } = data;
  const addToBasket = () => {};
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
