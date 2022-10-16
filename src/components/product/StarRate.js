const StarRate = ( { stars  }) => {
    
    const allStars = [];

    for(let i= 0; i < stars; i++) {
        allStars.push('star');
    } 

    for(let j= 0; j < 5 - stars ; j++) {
        allStars.push('star-o');
    }
    
    return (
        <ul className="list-unstyled">
            {
                allStars.map((star, index)=> {
                    return (
                        <li key={star + index}><img src={`./images/${star}.png`} alt="star" /></li>
                    );
                })
            }                                        
        </ul>
    )
}

export default StarRate;