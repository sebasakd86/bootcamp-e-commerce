import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
import { useDispatch } from "react-redux";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";
import { updateCollections } from "../../redux/ducks/shopDucks";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
    const [loading, setloading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = firestore.collection("collections");
        collectionRef.get().then(async (snapshot) => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collections));
            setloading(false);
        });
    }, []);
    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                render={() => (
                    <CollectionsOverviewWithSpinner isLoading={loading} />
                )}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={(match) => (
                    <CollectionPageWithSpinner isLoading={loading} {...match} />
                )}
            />
        </div>
    );
};

export default ShopPage;
