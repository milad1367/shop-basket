import Products from "../Products";
import Basket from "../Basket";
import "./index.scss";
export default function Shop() {
  return (
    <div className="shop row">
      <div className="col-xs-8">
        <Products />
      </div>
      <div className="col-xs-4 shop-basket">
        <Basket />
      </div>
    </div>
  );
}
