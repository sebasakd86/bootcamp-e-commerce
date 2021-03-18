import CollectionItem from "../collection-item/collection-item.component";
import {
    CollectionPreviewContainer,
    CollectionPreviewTitle,
    CollectionPreviewItems,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>
                {title.toUpperCase()}
            </CollectionPreviewTitle>
            <CollectionPreviewItems>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </CollectionPreviewItems>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;
