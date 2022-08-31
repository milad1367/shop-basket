import { useProducts } from "../../services/hooks/useProducts";
import ProductItem from "../ProductItem";

import "./index.scss";

export default function Products() {
  const [items, error] = useProducts();
  return (
    <div className="products">
      {items &&
        items.map((item: any) => (
          <div key={item.name}>
            <ProductItem data={item} />
          </div>
        ))}
      {!error && !items && <div>Getting products ...</div>}
      {error && <div>We have some error for getting pools</div>}
    </div>
  );
}
