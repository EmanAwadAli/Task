
const NewsLetter = () => {
    return (
        <form className="newsletter">
            <label>Subscribe to our newsletter</label>
            <div className="form-group">
                <input className="form-control" type="email" placeholder="Enter Your Email"/>
                <button className="btn" type="submit">Subscribe<i className="icon-send"></i></button>
            </div>
        </form>
    );
}

export default NewsLetter;