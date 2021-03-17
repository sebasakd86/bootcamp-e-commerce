import "./checkout-item.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItem, addItem, clearItemFromCart } = useContext(CartContext);
    const handleRemoveClick = () => {
        clearItemFromCart(cartItem);
    };
    const handleDecreaseQuantity = () => {
        removeItem(cartItem);
    };
    const handleIncreaseQuantity = () => {
        addItem(cartItem);
    };
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecreaseQuantity}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleIncreaseQuantity}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemoveClick}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
