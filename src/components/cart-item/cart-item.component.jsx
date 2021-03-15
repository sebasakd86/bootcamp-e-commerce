import {
    CartItemContainer,
    CartItemDetail,
    CartItemDetailName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt='item' />
            <CartItemDetail>
                <CartItemDetailName>{name}</CartItemDetailName>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </CartItemDetail>
        </CartItemContainer>
    );
};

export default CartItem;
