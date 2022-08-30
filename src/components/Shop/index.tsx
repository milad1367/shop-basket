import { useState } from "react";
import "./index.scss";
import Products from "../Products";
import Basket from "../Basket";
import { usePools } from "../../services/hooks/usePools";

export default function Shop() {
  const [data, error] = usePools();
  const [orders, setOrders] = useState([] as any);
  return (
    <div className="store">
      <Products items={data} />
      {error && <div>We have some error for getting pools</div>}
      <Basket />
    </div>
  );
}
