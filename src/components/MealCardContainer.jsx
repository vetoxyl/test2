import React from "react";
import MealCard from "./MealCard";
import "./styles/MealCardContainer.css";

const MealCardContainer = ({ meals }) => {
  return (
    <div className="meal-card-container">
      {meals.slice(0, 2).map((meal, index) => (
        <MealCard
          key={index}
          imageSrc={meal.imageSrc}
          altText={meal.altText}
          title={meal.title}
        />
      ))}
    </div>
  );
};

export default MealCardContainer;
