import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
