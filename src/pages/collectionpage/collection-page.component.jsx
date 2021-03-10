import "./collection-page.styles.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/ducks/shopDucks";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match }) => {
    const { title, items } = useSelector(
        selectCollection(match.params.collectionId)
    );
    console.log(title, items);
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default CollectionPage;
