import { Link } from 'react-router-dom';

const SocialLinks = () => {
    const social = [
        {
            "name": "facebook",
            "link": "https://www.facebook.com/",
            "icon": "./images/facebook.png"
        },
        {
            "name": "linkedin",
            "link": "https://www.linkedin.com/",
            "icon": "./images/linkedin.png"
        },
        {
            "name": "instagram",
            "link": "https://www.instagram.com/",
            "icon": "./images/instagram.png"
        },
        {
            "name": "twitter",
            "link": "https://twitter.com/",
            "icon": "./images/twitter.png"
        }
    ]
    return (
        <ul className="list-unstyled social">
            {
                social.map(item => {
                    return (
                        <li key={item.name}>
                            <a href={item.link}>
                                <span>
                                    <img src={item.icon} alt={item.name} className="img-fluid"/>
                                </span>
                                / YESHTERY
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default SocialLinks;