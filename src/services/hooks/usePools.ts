import useSWR from "swr";
import products from "../../assets/products.json";

export function usePools() {
  const { data, error } = useSWR("getPools", async () => products.data);
  return [data, error];
}
