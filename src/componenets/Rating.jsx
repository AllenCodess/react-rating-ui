// importing a react hook that will let me add a intial state an update it
import { useState } from "react";

// rating component/ includes a prop / default prop will run if a cusotm prop isnt set
const Rating = ({heading,
   color = 'gold',
    feedbackMessages= ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'] 
  }) => {
  // stars is an array with the length of 5 characters, a _ as a placeholder, and the value is 1-5
const stars = Array.from({length:5}, (_, i) => i + 1);

// initial state is rating/hover which is defined as 0 and setRating/setHover is the updated state
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    

    // returning multiple elements
  return (
  <div className="rating-container">
    {/* The prop is the text content for the heading */}
  <h2>{heading}</h2>
  <div className="stars">
    {/* when you want to use javascript inside of the return Im assuming thats what jsx is you need to 
    wrap it in curly braces */}
    {/* .map is performing a click event on each element. That event is adding a class of star based on a condition */}
    { stars.map((star) => (
        <span key={star}
        onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            color: star <= (hover || rating) ? color : '#ccc'
          }}
          
          // unicode text for a star on each element
          >{'\u2605'}</span>
    ))}
</div>
{/* this displays messages that corolates with the index of the array */}
{rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]} </p>}
  </div>)
}

export default Rating