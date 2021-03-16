import "./collection-page.styles.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/ducks/shopDucks";
import CollectionItem from "../../components/collection-item/collection-item.component";

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
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;
