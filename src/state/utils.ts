import { Product } from "../models/Product";
export const filterBasketByExpireDate = (basket: Product[]) => {
  const now = new Date().getTime();
  return basket.filter((item: Product) => {
    const createdAt = new Date(item.createdAt).getTime();
    const expireDate = createdAt + Number(item.orderLimitTime);
    return expireDate > now;
  });
};
