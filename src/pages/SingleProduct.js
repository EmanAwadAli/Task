import ProductSlider from "../components/product/ProductSlider";
import ProductDetails from "../components/product/ProductDetails";
import ProductItem from "../components/product/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar } from "swiper";
import BreadCrumb from "../components/breadcrumb/Breadcrumb";

const SingleProduct = ({ product ,similarProducts, addToCart, removeFromCart }) => {

        const otherProducts = similarProducts?.map(productItem => {
            return (
                <SwiperSlide key={productItem.id}>
                    <ProductItem product={productItem}/>
                </SwiperSlide>
            );
        })

        return (
            <>
                {/* BreadCrumb */}
                <BreadCrumb productName={product.title} />
                {/* Product Details */}
                <section className="product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                {/* Product Gallery Slider */}
                                <ProductSlider product={product} />
                            </div>
                            <div className="col-sm-6">
                                {/* Product Details */}
                                <ProductDetails product={product} addToCart= {addToCart} removeFromCart={removeFromCart} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Starting Similar Products */}
                <section className="similar-products">
                    <div className="container">
                        <div className="s-header">
                            <h2 className="title">Similar Products</h2>
                            <p>You may like these products also.</p> 
                        </div>
                        <Swiper
                            slidesPerGroup= {4}
                            slidesPerView={4}
                            spaceBetween={30}
                            centeredSlides={false}
                            slidesPerGroupSkip={1}
                            grabCursor={true}
                            keyboard={{
                            enabled: true,
                            }}
                            scrollbar={{
                                draggable: true,
                            }}
                            modules={[Keyboard, Scrollbar]}
                            className="mySwiper"
                        >
                            {otherProducts}
                        </Swiper>
                    </div>
                </section>
                {/* Ending Similar Products */}
            </>
        );
    
}

export default SingleProduct;