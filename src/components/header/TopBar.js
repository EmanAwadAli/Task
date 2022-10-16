import Logo from '../logos/LogoBlack';
import { Link } from 'react-router-dom';
import Ads from '../ads/ads';

const TopBar = () => {
    return(
        <div className="top-bar">
            <div className="container">
                {/* Starting Logo */}
                <div className="site-logo">
                    <button className="btn"><i className="icon-bars"></i></button>
                    {/* Logo */}
                    <h1 id="logo"><Link to="/Task/"><Logo/></Link></h1>
                </div>
                {/* Ending Logo */}

                {/* Ads Carousel  */}
                <Ads/>
                
                {/* Top Bar Links */}
                <ul className="list-unstyled">
                    <li><Link to="/Task/contactus"><i className="icon-phone-call"></i>Contact Us</Link></li>
                    <li><Link to="/Task/track-order"><i className="icon-cart2"></i>Track Order</Link></li>
                    <li><Link to="/Task/find-store"><i className="icon-map-marker"></i>Find A Store</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar;