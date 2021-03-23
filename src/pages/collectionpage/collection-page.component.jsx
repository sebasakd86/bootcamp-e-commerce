// import "./collection-page.styles.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/ducks/shopDucks";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
    CollectionPageContainer,
    CollectionPageItems,
    CollectionPageTitle,
} from "./collection-page.styles";

const CollectionPage = ({ match }) => {
    //this fails when selector fails, doing this i catch the exception but forces a double render.
    let title = "";
    let items = [];
    try {
        const obj = useSelector(selectCollection(match.params.collectionId));
        title = obj.title;
        items = obj.items;
    } catch (err) {}

    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItems>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionPageItems>
        </CollectionPageContainer>
    );
};

export default CollectionPage;
