import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
import { useDispatch } from "react-redux";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { useEffect } from "react";
import { updateCollections } from "../../redux/ducks/shopDucks";
const ShopPage = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot(async (snapshot) => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collections));
        });
    }, []);
    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default ShopPage;
