import { useState } from "react";
// import { Rating } from "react-simple-star-rating";

const CardRating = () => {
  const [rating, setRating] = useState(10); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div></div>
    // <Rating
    //   fillColor="#fddc48"
    //   transition
    //   iconsCount={10}
    //   size={22}
    //   onClick={handleRating}
    //   ratingValue={rating}
    // />
  );
};

export default CardRating;