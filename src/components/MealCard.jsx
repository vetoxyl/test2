import React from "react";
import './styles/MealCard.css';

const MealCard = ({ imageSrc, title, altText }) => {
  return (
    <div className="food-card">
      <img
        src={imageSrc}
        alt={altText}
        className="food-image"
      />
      <div className="food-title">{title}</div>
    </div>
  );
};

export default MealCard;
