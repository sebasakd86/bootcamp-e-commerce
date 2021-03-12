import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems, toggleCartHidden } from "../../redux/ducks/cartDucks";
import { withRouter } from "react-router-dom";
import {
    CartDropDownContainer,
    CartItemContainer,
    EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropDown = ({ history }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const handleClick = () => {
        dispatch(toggleCartHidden());
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
