
import AboutUsContent from './AboutUs';
import NewsLetter from './NewsLetter';
import SiteLinks from './SiteLinks';
import SocialLinks from './SocialLinks';
import PaymentMethods from '../payment-methods/PaymentMethods';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        {/*  Starting About Us */}
                        <AboutUsContent />
                        {/*  Ending About Us */}
                    </div>
                    <div className="col-sm-6">
                        {/*  Starting NewsLetter */}
                        <NewsLetter />
                        {/*  Ending NewsLetter */}
                        {/*  Starting Links */}
                        <div className="links">
                            {/* Site Links */}
                            <SiteLinks/>
                            {/* Social Links */}
                            <SocialLinks/>
                        </div>
                        {/*  Ending Links */}
                    </div>
                </div>
                {/*  Starting Footer Bottom */}
                <div className="footer-bottom">
                    {/*  Copy Rights  */}
                    <p className="copy-right">© 2022 yeshtery all rights reserved.</p>
                    {/*  Payment Methods */}
                    <PaymentMethods/>
                    {/*  Powered By */}
                    <div className="powered-by">
                        <label>Powered By</label>
                        <span><img src={'./images/nas_nav.svg'} alt=""/></span>
                    </div>
                </div>
                {/*  Ending Footer Bottom */}
            </div>
        </footer>
    )
}

export default Footer;