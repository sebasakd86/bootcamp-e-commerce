import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/ducks/cartDucks'
import { useDispatch } from 'react-redux';

import './cart-icon.styles.scss'
const CartIcon = () => {
    const dispatch = useDispatch();
    const handleCartClick = (e) => {
        dispatch(toggleCartHidden());
    }
    return (  
        <div className="cart-icon" onClick={handleCartClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}
export default CartIcon;