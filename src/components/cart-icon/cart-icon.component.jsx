import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
    toggleCartHidden,
    selectCartItemsCount,
} from "../../redux/ducks/cartDucks";
import { useDispatch, useSelector } from "react-redux";

import {
    CartIconContainer,
    ItemCount,
    ShoppingIconContainer,
} from "./cart-icon.styles";
const CartIcon = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItemsCount);

    const handleCartClick = (e) => {
        dispatch(toggleCartHidden());
    };
    return (
        <CartIconContainer onClick={handleCartClick}>
            <ShoppingIconContainer>
                <ShoppingIcon />
            </ShoppingIconContainer>
            <ItemCount>{items}</ItemCount>
        </CartIconContainer>
    );
};
export default CartIcon;
