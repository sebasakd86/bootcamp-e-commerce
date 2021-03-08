import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
    toggleCartHidden,
    selectCartItemsCount,
} from "../../redux/ducks/cartDucks";
import { useDispatch, useSelector } from "react-redux";

import "./cart-icon.styles.scss";
const CartIcon = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItemsCount);
    
    const handleCartClick = (e) => {
        dispatch(toggleCartHidden());
    };
    return (
        <div className='cart-icon' onClick={handleCartClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{items}</span>
        </div>
    );
};
export default CartIcon;
