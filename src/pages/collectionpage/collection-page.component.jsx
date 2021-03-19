import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useContext } from "react";
import { CollectionContext } from "../../providers/collection/collection.provider";

const CollectionPage = ({ match }) => {
    const { getCollection } = useContext(CollectionContext);
    // console.log(collections);
    const { title, items } = getCollection(match.params.collectionId);
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
