import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems, toggleCartHidden } from "../../redux/ducks/cartDucks";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ history }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const handleClick = () => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
    };
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((ci) => <CartItem key={ci.id} item={ci} />)
                ) : (
                    <span className='empty-message'>Cart is empty!</span>
                )}
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
export default withRouter(CartDropDown);
