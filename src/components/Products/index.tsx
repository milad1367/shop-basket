import { usePools } from "../../services/hooks/usePools";
import "./index.scss";

// interface IProducts {
//   items: any[];
// }

export default function Products() {
  const [data, error] = usePools();
  return (
    <div className="products">
      {data && data.map((item: any) => <div key={item.name}>{item.name}</div>)}
      {error && <div>We have some error for getting pools</div>}
    </div>
  );
}
