import React from "react";

const StarRating = ({rating}) => {

    const filledStars = Math.round(rating / 2)
    const unfilledStars = Math.round(5 - filledStars)


   const YellowStars = Array.from({length: filledStars}, () => (
    <div className="mr-1">
        <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        defaultChecked 
        />
    </div>
   ))

   const GreyStars = Array.from({length: unfilledStars}, () => (
    <div className="mr-1">
        <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-neutral-400"
        />
    </div>
   ))
   

  return (
    <div className="rating">
        {YellowStars}
        {GreyStars}
    </div>
  );
};

export default StarRating;
