import Cart from '../cart/Cart';
import MiddleBar from './MiddleBar';
import NavBar from './NavBar';
import TopBar from './TopBar';

const Header = ( { cartCountItems, cartItems, removeFromCart, brand } ) => {
    return(
        <header id="site-header">
            {/* Top Bar */}
            <TopBar/>
            {/* Middle Bar  */}
            <MiddleBar cartCountItems={cartCountItems} brand={brand}/>
            {/* Starting Hearder Nav Bar */}
            <NavBar/>
            {/* Cart */}
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </header>
    )
}

export default Header;