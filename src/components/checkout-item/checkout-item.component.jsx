import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import { clearItemFromCart, addCartItem, removeCartItem } from "../../redux/ducks/cartDucks";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const handleRemoveClick = () => {
        dispatch(clearItemFromCart(cartItem));
    };
    const handleDecreaseQuantity = () => {
        dispatch(removeCartItem(cartItem));
    }
    const handleIncreaseQuantity = () => {
        dispatch(addCartItem(cartItem));
    }
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecreaseQuantity}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={handleIncreaseQuantity}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemoveClick}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
