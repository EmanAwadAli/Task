const CartItem = ( {item, removeFromCart} ) => {
    return (
        <>
            <li className="item">
                    {/* Image */}
                    <div className="img">
                        <img src={require(`../../images/${item.image}`)} alt="" className="img-fluid"/>
                    </div>
                    {/* Details */}
                    <div className="details">
                        <h4 className="title">{item.title}</h4>
                        <div className="info">
                            <p className="qty">Quantity: <span>{item.qty}</span></p>
                            <p className="price">
                                {
                                    item.discount !== "" ?  <>
                                    <span className="discount-price">{(item.price / 100) * (100 - parseInt(item.discount))} <small className="currency">LE</small></span>
                                    <span className="real-price">{item.price} <small className="currency">LE</small></span></>
                                    :
                                    <span className="main-price">{item.price} <small className="currency">LE</small></span>
                                }
                               
                            </p>
                            <button className="btn remove"onClick={() => removeFromCart(item)}>remove</button>
                        </div>
                    </div>
                </li>
            {/* Ending Cart Item */}
        </>
    );
}

export default CartItem;