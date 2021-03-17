import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";
import {
    CartDropDownContainer,
    CartItemContainer,
    EmptyMessage,
} from "./cart-dropdown.styles";

import { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

const CartDropDown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext);
    const handleClick = () => {
        toggleHidden();
        history.push("/checkout");
    };
    return (
        <CartDropDownContainer>
            <CartItemContainer>
                {cartItems.length ? (
                    cartItems.map((ci) => <CartItem key={ci.id} item={ci} />)
                ) : (
                    <EmptyMessage>Cart is empty!</EmptyMessage>
                )}
            </CartItemContainer>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </CartDropDownContainer>
    );
};
export default withRouter(CartDropDown);
