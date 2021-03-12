// import './header.styles.scss'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "../../redux/ducks/userDucks";
import { selectCartHidden } from "../../redux/ducks/cartDucks";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer,
} from "./header.styles";

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    // console.log('Header', currentUser);
    const handleSignOut = async () => {
        await auth.signOut();
        dispatch(setCurrentUser());
    };
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={handleSignOut}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {!hidden ? <CartDropDown /> : null}
        </HeaderContainer>
    );
};
export default Header;
