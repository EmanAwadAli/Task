import Menu from "../menu/Menu";

const NavBar = () => {
    const navLinks = [
        { name: "Men", path: "/Task/men"},
        { name: "Women", path: "/Task/women"},
        { name: "Unisex", path: "/Task/unisex"},
        { name: "Kids", path: "/Task/kids"},
        { name: "Best Sellers", path: "/Task/bestsellers"},
        { name: "New Arrivals", path: "/Task/new-arrivals"},
        { name: "Offers", path: "/Task/offers"},
    ];
    return (
        <>       
            <nav className="navbar">
                <div className="container">
                    <Menu links={navLinks} ulClassName="navbar-nav"/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;