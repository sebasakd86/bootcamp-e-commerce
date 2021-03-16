import { useDispatch } from "react-redux";
import {
    clearItemFromCart,
    addCartItem,
    removeCartItem,
} from "../../redux/ducks/cartDucks";
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemSpanNombre,
    CheckoutItemSpanQuantity,
    CheckoutItemArrow,
    CheckoutItemSpanValue,
    CheckoutItemSpanPrice,
    CheckoutItemRemove,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const handleRemoveClick = () => {
        dispatch(clearItemFromCart(cartItem));
    };
    const handleDecreaseQuantity = () => {
        dispatch(removeCartItem(cartItem));
    };
    const handleIncreaseQuantity = () => {
        dispatch(addCartItem(cartItem));
    };
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt='item' />
            </CheckoutItemImageContainer>
            <CheckoutItemSpanNombre>{name}</CheckoutItemSpanNombre>
            <CheckoutItemSpanQuantity>
                <CheckoutItemArrow onClick={handleDecreaseQuantity}>
                    &#10094;
                </CheckoutItemArrow>
                <CheckoutItemSpanValue>{quantity}</CheckoutItemSpanValue>
                <CheckoutItemArrow onClick={handleIncreaseQuantity}>
                    &#10095;
                </CheckoutItemArrow>
            </CheckoutItemSpanQuantity>
            <CheckoutItemSpanPrice>{price}</CheckoutItemSpanPrice>
            <CheckoutItemRemove onClick={handleRemoveClick}>
                &#10005;
            </CheckoutItemRemove>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
