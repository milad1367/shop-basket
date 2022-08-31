import "./index.scss";
interface IAmount {
  price: string;
  currency: string;
}
export default function Amount({ price, currency }: IAmount) {
  return (
    <div className="amount">
      <span className="amount-value">$ {price}</span>
      <span className="amount-currency">{currency}</span>
    </div>
  );
}
