import "./collection-item.styles.scss";

import { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const { addItem } = useContext(CartContext);
    const handleClick = (e) => {
        addItem(item);
    };
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={handleClick}>
                Add to cart
            </CustomButton>
        </div>
    );
};

export default CollectionItem;
