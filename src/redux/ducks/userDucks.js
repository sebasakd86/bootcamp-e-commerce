// constantes
const INITIAL_STATE = {
    currentUser: null
}
// types
const SET_CURRENT_USER = 'SET_CURRENT_USER';

// reducer
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            //Every reducer get every fired action, so this is mandatory
            default:
                return state;
    }
}
// actions
export const setCurrentUser = user => async (dispatch, getState) => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    })
}