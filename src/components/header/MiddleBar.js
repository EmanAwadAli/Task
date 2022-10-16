import { Link } from "react-router-dom";
import Search from "../Search/Search";
const MiddleBar = ({ cartCountItems }) => {
    return(
        <div className="middle-bar">
            <div className="container">
                {/* Search  */}
                <Search/>
                {/* Starting Brand Logo */}
                <div className="brand-logo">
                    <img src="./images/adidas.png" alt=""/>     
                </div>
                {/* Ending Brand Logo */}
                {/* Starting Middle Bar Links */}
                <ul className="list-unstyled">
                    <li><span className="opencart"><i className="icon-cart"><span className="items-count">{cartCountItems}</span></i>cart</span></li>
                    <li><Link to="/Task/wishlist"><i className="icon-heart"></i>Wishlist</Link></li>
                    <li><Link to="/Task/login"><i className="icon-user"></i>Login</Link></li>
                </ul>
                {/* Ending Middle Bar Links */}
            </div>
        </div>
    )
}

export default MiddleBar;