import { Link } from "react-router-dom";

const BreadCrumb = ({ productName }) => {
    return (
        <nav aria-label="breadcrumb" className="nav-breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="Task/men">Men</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="Task/clothing">Clothing</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="Task/Tops">Tops</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="Task/adidas">Adidas</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{productName}</li>
                </ol>
            </div>
        </nav>
    );
}

export default BreadCrumb;