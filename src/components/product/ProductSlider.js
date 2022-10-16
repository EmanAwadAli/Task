import { Component } from "react";
import Slider from "react-slick";

class ProductSlider extends Component {

    state = {
        nav1: null,
        nav2: null
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render () {
        const product = this.props.product;
        const productGallery = product.gallery?.map(img => {
            return (
              /*Starting Item */
              <div className='item' key={img}>
                <img src={require(`../../images/${img}`)} alt={img} className="img-fluid"/>
              </div>
              /*Ending Item */
            );
        });
    
        return (
            <div className="product-gallery">
                <i className="icon-360"><img src="./images/360.svg" alt=""/></i>
                <Slider 
                    className="slider-for" 
                    asNavFor={this.state.nav2} 
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}
                >
                     { productGallery }
                </Slider>
                {/*Slider Nav */}
                <Slider 
                    className="slider-nav"  
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    { productGallery }
                </Slider>
            </div>
        );
    }
}

export default ProductSlider;