import { Component } from "react";
import StarRate from "./StarRate";
import $ from 'jquery';
import { Link } from "react-router-dom";
class ProductDetails extends Component {

    state = {
        quantity : 1
    }

    // Change Quantity Default Value In State 
    changeQtyHandler = (e, qty) => {
        e.preventDefault();
        this.setState({ quantity : qty})
    }

    // Increase Quantity 
    increaseQtyHandler = () => {
        const currrentQty = this.state.quantity;
        this.setState({quantity : currrentQty + 1 })
    }

    // Decrease Quantity
    decreaseQtyHandler = () => {
        const currrentQty = this.state.quantity;
        if (currrentQty > 1) {
            this.setState({quantity : currrentQty - 1 })
        }
    }

    componentDidMount () {
        $(function () {
            $('.product-sizes li,.product-colors li').on('click', function() {
                $(this).addClass('active').siblings('li').removeClass('active')
            });
        });
    }

    render() {
        return (
            /* Starting Product Information */
            <div className="product-info">
                <span className="product-brand">
                    <img src={require(`../../images/brands/${this.props.product.brand.logo}`)}  alt="adidas"  className="img-fluid"/>
                </span>
                <h2 className="product-title">{this.props.product.title}</h2>
                <p className="product-category">{this.props.product.category}</p>
                {/* Starting Product Rate */}
                <div className="product-rating">
                    <StarRate stars={this.props.product.stars}/>
                    <span>{this.props.product.stars} of 5</span>
                    <span className="rates">{this.props.product.rates} Rates</span>
                </div>
                {/* Ending Product Rate */}
                <p className="product-price">
                    {
                        this.props.product.discount !== "" ?  
                        <>
                            <span className="discount-price">{(this.props.product.price / 100) * (100 - parseInt(this.props.product.discount))} <small className="currency">LE</small></span> 
                            <span className="real-price">{this.props.product.price} <small className="currency">LE</small></span><span className="offer">{this.props.product.discount} off</span>
                        </>
                        :
                        <span className="main-price">{this.props.product.price} <small className="currency">LE</small></span>
                    }
                </p>     
                <p className="product-price"></p>
                {/* Starting Product Size */}
                <div className="product-sizes">
                    <label>Size</label>
                    <ul className="list-unstyled">
                    {
                        this.props.product.sizes?.map(size => <li key={size}>{size}</li> )
                    }
                    </ul>
                </div>
                {/* Ending Product Size */}
                {/* Starting Product Colors */}
                <div className="product-colors">
                    <label>Colors</label>
                    <ul className="list-unstyled">
                    {
                        this.props.product.colors?.map(color => {
                            const colorbg = color.image ? `url(${require(`../../images/${color.image}`)})` : color.code;
                            return (
                                <li key={color.code} style={{background: `${colorbg}` }}></li>
                            );
                        })
                    }
                    </ul>
                </div>
                {/* Ending Product Colors */}
                {/* Starting Product Quantity */}
                <form className="product-quantity">
                    <label>Quantity</label>
                    <div className="form-group">
                        <span className="btn decrease" onClick={() => this.decreaseQtyHandler()}>-</span>
                        <input id="qty" type="text" className="form-control" name="qty" value={this.state.quantity}  onChange={(e) => this.changeQtyHandler(e, e.target.value)}/>
                        <span className="btn increase" onClick={() => this.increaseQtyHandler()}>+</span>
                    </div>
                    <button className="btn btn-add" type="button" onClick={() => this.props.addToCart( this.props.product, this.state.quantity)}>Add To Cart</button>
                    <Link to="/pick-up" className="btn btn-pickup">Pick Up From Store</Link>
                </form>
                {/* Ending Product Quantity */}
            </div>
            /* Ending Product Information */
        );
    }
}

export default  ProductDetails;