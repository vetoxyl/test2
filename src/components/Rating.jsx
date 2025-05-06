import ReactStars from "react-stars";
import React from "react";

const Rating = () => {
  return (
    <ReactStars
      count={5}
      value={2.5} // Fixed rating
      size={30}
      color2={"#ffd700"} // Gold color for filled stars
      half={true} // Allows half-stars
      edit={false} // Prevents user interaction
    />
  );
};

export default Rating;