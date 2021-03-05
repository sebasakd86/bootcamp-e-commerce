// constantes
const INITIAL_STATE = {
    hidden: true
}
// types
const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

// reducer
export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            } //To toggle the value.
            //Every reducer get every fired action, so this is mandatory
            default:
                return state;
    }
}
// actions
export const toggleCartHidden = () => async (dispatch, getState) => {
    dispatch({
        type: TOGGLE_CART_HIDDEN
        //, payload: user no need to pass the payload, since its toggling within the reducer
    })
}