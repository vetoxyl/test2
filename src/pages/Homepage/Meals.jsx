import React from "react";
import MealCardContainer from "./MealCardContainer";

const categorizedMeals = {
  Breakfast: [
    {
      imageSrc: "/images/pancakes.jpg",
      altText: "Pancakes with syrup",
      title: "Fluffy Pancakes"
    },
    {
      imageSrc: "/images/omelette.jpg",
      altText: "Veggie Omelette",
      title: "Healthy Omelette"
    }
  ],
  Lunch: [
    {
      imageSrc: "/images/salad.jpg",
      altText: "Salad and Egg",
      title: "Creamy Salad"
    },
    {
      imageSrc: "/images/sandwich.jpg",
      altText: "Chicken Sandwich",
      title: "Grilled Sandwich"
    }
  ],
  Dinner: [
    {
      imageSrc: "/images/stew.jpg",
      altText: "Beef Stew",
      title: "Spicy Beef Stew"
    },
    {
      imageSrc: "/images/rice.jpg",
      altText: "Jollof Rice",
      title: "Jollof Rice"
    }
  ]
};


const MealGroups = ({ categorizedMeals }) => {
  return (
    <div>
      {Object.entries(categorizedMeals).map(([category, meals]) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h2>{category}</h2>
          <MealCardContainer meals={meals} />
        </div>
      ))}
    </div>
  );
};

export default MealGroups;
