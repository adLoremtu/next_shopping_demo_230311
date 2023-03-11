import { ItemResultsType } from "./firebase";

export type CartItemType = ItemResultsType & { quantity: number };

export type CartType = {
  items: CartItemType[];
  total: number;
};