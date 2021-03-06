import './collection-item.styles.scss'

import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/ducks/cartDucks'

import CustomButton from '../custom-button/custom-button.component'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch();
    const handleClick = e => {
        dispatch(addCartItem(item));
    }
    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={handleClick}>Add to cart</CustomButton>
        </div>
    );
}

export default CollectionItem;