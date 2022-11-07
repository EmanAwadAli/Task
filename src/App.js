import React, { Suspense } from 'react';
import $ from 'jquery';
import './css/main.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getProduct, getSimilarProducts } from './services/data/functions';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const TrackOrder = React.lazy(() => import('./pages/TrackOrder'));
const Terms = React.lazy(() => import('./pages/Terms'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Shipping = React.lazy(() => import('./pages/Shipping'));
const FindStore = React.lazy(() => import('./pages/FindStore'));
const SellWithUs = React.lazy(() => import('./pages/SellWithUs'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
const Women = React.lazy(() => import('./pages/Women'));
const Men = React.lazy(() => import('./pages/Men'));
const Kids = React.lazy(() => import('./pages/Kids'));
const Unisex = React.lazy(() => import('./pages/Unisex'));
const Bestsellers = React.lazy(() => import('./pages/Bestsellers'));
const NewArrivals = React.lazy(() => import('./pages/NewArrivals'));
const Offers = React.lazy(() => import('./pages/Offers'));
const Clothing = React.lazy(() => import('./pages/Clothing'));
const Tops = React.lazy(() => import('./pages/Tops'));
const Adidas = React.lazy(() => import('./pages/Adidas'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const Login = React.lazy(() => import('./pages/Login'));
const CheckOut = React.lazy(() => import('./pages/CheckOut'));
const ReviewCart = React.lazy(() => import('./pages/ReviewCart'));
const PickUp = React.lazy(() => import('./pages/PickUp'));
const NotFound = React.lazy(() => import('./pages/404'));

class App extends Component {

  state = {
    product: {},
    similarProducts: [],
    cartItems: []
  };

  /* 
    Fetch 'product1' data and update the state , to fetch other products data you have other four dummy products 
    [product2, product3, product4, product5 ]
  */
  setProduct = async () => {
    const result = await getProduct('product1');
    this.setState({ product: result });
  };

  // Fetch Similar Products Data and update the state
  setsimilarProduct = async () => {
    const result = await getSimilarProducts('T-shirt');
    this.setState({ similarProducts: result });
  };

  componentDidMount() {
    this.setProduct();
    this.setsimilarProduct();

    // Cart Animation Jquery Code
    $(function () {
      // Trigger Cart
      const openCart = $('.opencart');
      const closeCart = $('.closecart');

      openCart.on('click', function () {
        $('#cartsideNav').css({ 'right': '0' });
        $('body').addClass('active');
      });

      closeCart.on('click', function () {
        $('#cartsideNav').css({ 'right': '-500px' });
        $('body').removeClass('active');
      });
    });
  }

  // Add To Cart Function
  addToCartHandler = (product, qty) => {
    const exist = this.state.cartItems.find(item => item.id === product.id);
    if (exist) {
      this.setState({ cartItems: [...this.state.cartItems].map(item => item.id === product.id ? { ...exist, qty: exist.qty + parseInt(qty) } : item) })
    } else {
      this.setState({ cartItems: [...this.state.cartItems, { ...product, qty: parseInt(qty) }] })
    }
  }

  // Remove From Cart Function
  removeFromCartHandler = (product) => {
    const exist = this.state.cartItems.find(item => item.id === product.id);
    if (exist) {
      this.setState({ cartItems: [...this.state.cartItems].filter(item => item.id !== product.id) })
    }
  }
  render() {

    return (
      <>
        {/* Header */}
        <Header cartCountItems={this.state.cartItems.length} cartItems={this.state.cartItems} removeFromCart={this.removeFromCartHandler} brand={this.state.product.brand?.logo} />
        {/* Internal Content */}
        <Suspense fallback={<Spinner></Spinner>}>
          <Routes>
            <Route 
                path="/Task/"
                element={
                  <SingleProduct
                    product={this.state.product}
                    similarProducts={this.state.similarProducts}
                    addToCart={this.addToCartHandler}
                  />
                }
            />
            <Route path="/Task/aboutus" element={<AboutUs />} />
            <Route path="/Task/contactus" element={<ContactUs />} />
            <Route path="/Task/track-order" element={<TrackOrder />} />
            <Route path="/Task/find-store" element={<FindStore />} />
            <Route path="/Task/terms-and-conditions" element={<Terms />} />
            <Route path="/Task/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Task/sell-with-us" element={<SellWithUs />} />
            <Route path="/Task/shipping-and-returns" element={<Shipping />} />
            <Route path="/Task/men" element={<Men />} />
            <Route path="/Task/women" element={<Women />} />
            <Route path="/Task/kids" element={<Kids />} />
            <Route path="/Task/unisex" element={<Unisex />} />
            <Route path="/Task/bestsellers" element={<Bestsellers />} />
            <Route path="/Task/new-arrivals" element={<NewArrivals />} />
            <Route path="/Task/offers" element={<Offers />} />
            <Route path="/Task/clothing" element={<Clothing />} />
            <Route path="/Task/tops" element={<Tops />} />
            <Route path="/Task/adidas" element={<Adidas />} />
            <Route path="/Task/wishlist" element={<Wishlist />} />
            <Route path="/Task/login" element={<Login />} />
            <Route path="/Task/review-cart" element={<ReviewCart />} />
            <Route path="/Task/pick-up" element={<PickUp />} />
            <Route path="/Task/checkout" element={<CheckOut />} />
            <Route path='/Task/*' element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* Footer */}
        <Footer />
      </>
    );
  }
}

export default App;
