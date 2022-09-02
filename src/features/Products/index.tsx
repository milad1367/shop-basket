import { useProducts } from "../../services/hooks/useProducts";
import ProductItem from "./ProductItem";

import "./index.scss";

export default function Products() {
  const [items, error] = useProducts();
  return (
    <div className="products row">
      {items &&
        items.map((item: any) => (
          <div
            key={item.name}
            className="products-item col-lg-4 col-md-6 col-sm-6 col-xs-12"
          >
            <ProductItem data={item} />
          </div>
        ))}
      {!error && !items && <div>Getting products ...</div>}
      {error && <div>We have some error for getting pools</div>}
    </div>
  );
}
