import { createContext, useState, useEffect } from "react";
import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
} from "./utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartITems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
    //The Cart state is handled here, so the child components have a single source of truth.
    const [hidden, setHidden] = useState(true);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemsCount, setcartItemsCount] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = (item) => {
        setcartItems(addItemToCart(cartItems, item));
    };
    const removeItem = (item) => {
        setcartItems(removeItemFromCart(cartItems, item));
    };
    const clearItemFromCart = (item) => {
        setcartItems(filterItemFromCart(cartItems, item));
    };
    useEffect(() => {
        setcartItemsCount(getCartItemsCount(cartItems));
    }, [cartItems]);
    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                cartItemsCount,
                removeItem,
                clearItemFromCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
