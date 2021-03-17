import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useContext } from "react";
import CollectionsContext from "../../context/collections/collections.context";

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext);
    const { title, items } = collections[match.params.collectionId];
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
