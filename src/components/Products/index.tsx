import ProductItem from "../ProductItem";

import "./index.scss";

interface IProducts {
  items: any[];
}

export default function Products({ items }: IProducts) {
  return (
    <div className="products">
      {items &&
        items.map((item: any) => (
          <div key={item.name}>
            <ProductItem data={item} />
          </div>
        ))}
    </div>
  );
}
