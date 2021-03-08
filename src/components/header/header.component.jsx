import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, selectCurrentUser } from '../../redux/ducks/userDucks';
import { selectCartHidden } from '../../redux/ducks/cartDucks';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const hidden = useSelector(selectCartHidden);
    // console.log('Header', currentUser);
    const handleSignOut = async () => {
        await auth.signOut();
        dispatch((setCurrentUser()));
    }
    return (
        <div className="header">
            <Link to="/" className='logo-container'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser
                        ?
                        <div className='option' onClick={handleSignOut}>SIGN OUT</div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>
                }                
                <CartIcon />
            </div>
            {
                !hidden ? <CartDropDown /> : null
            }            
        </div>
    );
}
export default Header;