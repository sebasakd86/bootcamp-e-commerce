import { addItemToCart } from "../utils";
import { createSelector } from "reselect";
// constantes
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};
// types
const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
const ADD_ITEM = "ADD_ITEM";

// reducer
export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden, //To toggle the value
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        //Every reducer get every fired action, so this is mandatory
        default:
            return state;
    }
}
// actions
export const toggleCartHidden = () => async (dispatch, getState) => {
    dispatch({
        type: TOGGLE_CART_HIDDEN,
        //, payload: user no need to pass the payload, since its toggling within the reducer
    });
};

export const addCartItem = (item) => async (dispatch, getState) => {
    dispatch({
        type: ADD_ITEM,
        payload: item,
    });
};

//selectors
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((acum, cartItem) => acum + cartItem.quantity, 0)
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
