const PaymentMethods = () => {
    return (
        <ul className="list-unstyled payment">
            <li><img src={'/images/cash.png'} alt="" className="img-fluid"/></li>
            <li><img src={'/images/visa.png'} alt="" className="img-fluid"/></li>
            <li><img src={'/images/matercard.png'} alt="" className="img-fluid"/></li>
        </ul>
    );
}

export default PaymentMethods;