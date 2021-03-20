export const addItemToCart = (cartItems, itemToAdd) => {
    const exists = cartItems.find((c) => c.id === itemToAdd.id);
    if (exists) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, itemToRemove) => {
    const exists = cartItems.find((c) => c.id === itemToRemove.id);
    if (exists.quantity === 1) {
        //remove the item
        return cartItems.filter((ci) => ci.id !== itemToRemove.id);
    }
    return cartItems.map((ci) => {
        return ci.id === itemToRemove.id
            ? { ...ci, quantity: ci.quantity - 1 }
            : ci;
    });
};

export const filterItemFromCart = (cartItems, item) => {
    return cartItems.filter((ci) => ci.id !== item.id);
};

export const getCartItemsCount = (cartItems) => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
};

export const getCartTotal = (cartItems) => {
    return cartItems.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
    );
};