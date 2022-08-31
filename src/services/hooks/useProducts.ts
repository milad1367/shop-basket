import useSWR from "swr";
import products from "../../assets/products.json";

export function useProducts() {
  const { data, error } = useSWR("getProducts", async () => products.data);
  return [data, error];
}
