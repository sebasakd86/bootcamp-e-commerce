import { useSelector } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/ducks/shopDucks";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

//Not a component per-se, but isolating the redux logic from shop.
const CollectionsOverviewContainer = () => {
    const isLoading = useSelector(selectIsCollectionFetching());
    return <CollectionsOverviewWithSpinner isLoading={isLoading} />;
};
export default CollectionsOverviewContainer;
