import { Link } from "react-router-dom"

const MenuItem = ({details}) => {
    return (
        <li className={details.liClass}>
            <Link to={details.path} className={details.class}>{details.name}</Link>
        </li>
    );
}

export default MenuItem;