import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ( { cartItems, removeFromCart}  ) => {

    // Calculate Products Total Cost
    const totalPrice = cartItems.reduce((a,c) => {
        if (c.discount !== "") {
            return (c.price / 100) * (100 - parseInt(c.discount)) * c.qty;
        } else {
            return c.price * c.qty;
        }
    }, 0);

    return (
        /* Starting Cart SideNav */
        <div id="cartsideNav">
            <span className="closebtn closecart"><img src={'/images/close.svg'} alt="&times;" className="img-fluid"/></span>
            <h2 className="heading"> My Cart </h2>
            {
                cartItems.length > 0 &&
                <h3 className="label">Cart Summary</h3>
            }
            <div>
                { cartItems.length === 0 && <p className="empty">Cart Is Empty</p> }
            </div>
            <ul className="list-unstyled list-items">
                {
                    cartItems.map(item => <CartItem item={item} key={item.id} removeFromCart={removeFromCart}/>)
                }
            </ul>
            {
                cartItems.length > 0 &&
                /* Starting Cart Summary */
                    <div>
                        <strong className="total">Total: {totalPrice} <span className="currency">LE</span></strong>
                        <p>
                            <Link to='/review-cart' className="review-cart">Review Cart</Link>
                            <Link to='/checkout' className="checkout">Complete CheckOut</Link>
                        </p>
                    </div>
                /* Ending Cart Summary */
            }
        </div>
        /* Ending Cart SideNav */    
    );
}

export default Cart;