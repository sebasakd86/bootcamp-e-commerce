import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/ducks/cartDucks";

import {
    CollectionItemContainer,
    CollectionItemImage,
    CollectionItemFooter,
    CollectionItemNameSpan,
    CollectionItemPriceSpan,
    CollectionItemButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(addCartItem(item));
    };
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}></CollectionItemImage>
            <CollectionItemFooter>
                <CollectionItemNameSpan>{name}</CollectionItemNameSpan>
                <CollectionItemPriceSpan>{price}</CollectionItemPriceSpan>
            </CollectionItemFooter>
            <CollectionItemButton inverted onClick={handleClick}>
                Add to cart
            </CollectionItemButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;
