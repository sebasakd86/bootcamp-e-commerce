import { createContext } from "react";

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {}, //whenever we use a fn, the default value is an empty fn.
});
export default CartContext;
