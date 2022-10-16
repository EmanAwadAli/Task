import { Link } from "react-router-dom";

const AdItem = ( {ad}) => {
    return (
         <div className="ad-item">
            <p>
                {ad.adText}
                <Link to={`/${ad.adLink}`}>{ad.linkText}</Link>
            </p>
        </div>
    )
}

export default AdItem;