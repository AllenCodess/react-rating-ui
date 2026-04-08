const Star = ({star,rating,hover,color,ratingClick, ratingHover, ratingHoverLeave}) => {
    return ( <span
    onClick={ratingClick}
    onMouseEnter={ratingHover}
    onMouseLeave={ratingHoverLeave}
         className="star"
        style={{color: star <= (hover || rating) ? color : '#ccc'}}
         >{'\u2605'}</span> );
}
 
export default Star;