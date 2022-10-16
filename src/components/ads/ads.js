import { Component } from "react";
import Slider from "react-slick";
import AdItem from "./AdItem";
import { getAds } from "../../services/data/functions";

class Ads extends Component {

    state = {
        ads : []
    };

    // Fetch Ads Data
    setAllAds = async () => {
        const allAds = await getAds();
       this.setState({ ads : allAds })
    };

    componentDidMount() {
        this.setAllAds();
    }

    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    render () {
        const allAds = this.state.ads?.map(ad => <AdItem ad={ad} key={ad.id}/>);
        return (
            <Slider className="ads" {...this.settings}>
                { allAds }
            </Slider>
        );
    }
}

export default Ads;