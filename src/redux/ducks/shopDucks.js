import { createSelector } from "reselect";
import SHOP_DATA from "./shop.data";
/* -------------------------
        constantes
------------------------- */
const INITIAL_STATE = {
    collections: SHOP_DATA,
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
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(k => collections[k])
)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)