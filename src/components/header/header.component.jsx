// import './header.styles.scss'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";

import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer,
} from "./header.styles";

import { CartContext } from "../../providers/cart/cart.provider";
import { CurrentUserContext } from "../../providers/user/user.provider";

const Header = () => {
    // const x = useContext(CurrentUserContext);
    // console.log("header", x);
    const { setCurrentUser, currentUser } = useContext(CurrentUserContext);
    const { hidden } = useContext(CartContext);
    // console.log('Header', currentUser);
    const handleSignOut = async () => {
        await auth.signOut();
        setCurrentUser();
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
