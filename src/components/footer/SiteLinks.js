import Menu from '../menu/Menu';

const SiteLinks = () => {
    const siteLinks = [
        { name: "About us", path: "/Task/aboutus"},
        { name: "Conatct us", path: "/Task/contactus"},
        { name: "Track Order", path: "/Task/track-order"},
        { name: "Terms & Conditions", path:"/Task/terms-and-conditions"},
        { name: "Privacy Policy", path: "/Task/privacy-policy"},
        { name: "Sell With Us", path: "/Task/sell-with-us"},
        { name: "Shipping", path: "/Task/shipping-and-returns"},
    ];
    return (
        <>
            <Menu links={siteLinks} ulClassName="site-links"/>
        </>
    )
}


export default SiteLinks;