import { useSelector } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/ducks/shopDucks";
import CollectionPage from "./collection-page.component";
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//Not a component per-se, but isolating the redux logic from shop.
const CollectionPageContainer = ({ match }) => {
    const isLoading = useSelector(selectIsCollectionFetching());
    return <CollectionPageWithSpinner match={match} isLoading={isLoading} />;
};

export default CollectionPageContainer;
