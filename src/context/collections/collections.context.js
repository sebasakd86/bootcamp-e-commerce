import { createContext } from "react";
import SHOP_DATA from "./shop.data";

export const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
