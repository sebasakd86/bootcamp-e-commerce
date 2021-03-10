import { createSelector } from "reselect";
import SHOP_DATA from "./shop.data";
/* -------------------------
        constantes
------------------------- */
const INITIAL_STATE = {
    collections: SHOP_DATA,
};
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};
/* -------------------------
            types
------------------------- */

/* -------------------------
            reducer
------------------------- */
export default function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
/* -------------------------
            actions
------------------------- */

/* -------------------------
            selectors
------------------------- */
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(c => c.id === COLLECTION_ID_MAP[collectionUrlParam])
)