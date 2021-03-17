import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/ducks/cartDucks";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";

const CheckoutPage = () => {
    const total = useSelector(selectCartTotal);
    const { cartItems: items } = useContext(CartContext);
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {items.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
        </div>
    );
};

export default CheckoutPage;
