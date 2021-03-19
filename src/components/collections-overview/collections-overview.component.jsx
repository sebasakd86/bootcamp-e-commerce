import { useContext } from "react";
import { CollectionContext } from "../../providers/collection/collection.provider";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
const CollectionsOverview = () => {
    const { getCollections } = useContext(CollectionContext);
    return (
        <div className='collections-overview'>
            {getCollections().map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </div>
    );
};

export default CollectionsOverview;
