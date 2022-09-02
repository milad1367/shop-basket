import Basket from "../../features/Basket";
import Products from "../../features/Products";
import "./index.scss";
export default function Shop() {
  return (
    <div className="shop row">
      <div className="col-lg-8 col-xs-12">
        <Products />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12  shop-basket">
        <Basket />
      </div>
    </div>
  );
}
