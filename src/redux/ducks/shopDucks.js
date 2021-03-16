import { createSelector } from "reselect";
import {
    convertCollectionsSnapshotToMap,
    firestore,
} from "../../firebase/firebase.utils";
/* -------------------------
        constantes
------------------------- */
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
};
/* -------------------------
            types
------------------------- */
const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";
/* -------------------------
            reducer
------------------------- */
export default function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false,
            };
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
}
/* -------------------------
            actions
------------------------- */
export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});
export const fetchCollectionsFail = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});
export const fetchCollectionsStartAsync = () => (dispatch, getState) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
        .get()
        .then(async (snapshot) => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collections));
        })
        .catch((err) => dispatch(fetchCollectionsFail(err.message)));
};
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
    (collections) =>
        collections ? Object.keys(collections).map((k) => collections[k]) : []
);
export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = () =>
    createSelector([selectShop], (shop) => shop.isFetching);

//something here ain't working
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);
