import { useSelector } from 'react-redux'
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/ducks/cartDucks'

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    return (  
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    (cartItems) ? cartItems.map(ci => <CartItem key={ci.id} item={ci} />) : null
                }                
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
} 
export default CartDropDown;