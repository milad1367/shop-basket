import { useProducts } from "../../services/hooks/useProducts";
import ProductItem from "../ProductItem";

import "./index.scss";

export default function Products() {
  const [items, error] = useProducts();
  return (
    <div className="products row">
      {items &&
        items.map((item: any) => <ProductItem key={item.name} data={item} />)}
      {!error && !items && <div>Getting products ...</div>}
      {error && <div>We have some error for getting pools</div>}
    </div>
  );
}
