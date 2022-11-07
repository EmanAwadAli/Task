import StarRate from "./StarRate";

const ProductItem = ( { product }) => {

    return (
        <div className="product-item">
            <i className="icon-360"><img src="./images/360.svg" alt=""/></i>
            {/* Starting Product Image */}
            <div className="img">
                <img src={require(`../../images/${product.image}`)} alt="product" className="img-fluid"/>
            </div>
            {/* Ending Product Image */}
            {/* Starting Product Info */}
            <div className="info">
                <h3 className="title">{product.title}</h3>
                <div className="product-price">
                    <p className="price">
                    {
                        product.discount !== "" ?  <>
                        <span className="discount-price">{(product.price / 100) * (100 - parseInt(product.discount))} <small className="currency">LE</small></span>
                        <br/><span className="real-price">{product.price} <small className="currency">LE</small></span>
                        <span className="offer">{product.discount}</span></>
                        :
                        <span className="main-price">{product.price} <small className="currency">LE</small></span>
                    }
                    </p>                                        
                    <span className="brand"><img src={require(`../../images/brands/${product.brand.logo}`)}  alt="adidas" className="img-fluid"/></span>
                </div>
                <div className="rate">
                    <StarRate stars={product.stars}/>
                    <span>{product.stars} of 5</span>
                </div>
                <p>pickup from: <strong>Genena Mail</strong></p>
            </div>
            {/* Ending Product Info */}
        </div>
    );
}

export default ProductItem;