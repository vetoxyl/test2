import React from 'react';
import '../../styles/RecipeCard.css';

const RecipeCard = () => {
  return (
    <div className="recipe-container">
      <div className="search-bar">
        <input type="text" placeholder="Search for any meals..." />
        <button>Search</button>
      </div>

      <div className="card">
        <img
          src="/meals/akaraandpap.png"
          alt="Akara and Pap"
          className="main-image"
        />

        <div className="title-section">
          <h2>Akara and Pap</h2>
          <div className="rating">
            <span>⭐⭐⭐⭐☆ 4.5</span>
            <span> • 25 min</span>
            <span> • 4 Servings</span>
          </div>
          <div className="tags">
            <span className="tag">Flexitarian</span>
            <span className="tag">High Protein</span>
          </div>
        </div>

        <div className="tabs">
          <span>About</span>
          <span>Grab Ingredients</span>
          <span>Find Cookware</span>
          <span>Cook and Enjoy!</span>
        </div>

        <div className="description">
          <p>
            Akara and Pap, a classic Nigerian breakfast combination, is nutritious and delicious...
          </p>

          <h4>Akara:</h4>
          <ul>
            <li>Calories: 200–300</li>
            <li>Protein: 12–15g</li>
            <li>Carbs: 25–30g</li>
            <li>Fibre: 4–5g</li>
            <li>Fat: 10–15g</li>
          </ul>

          <h4>Pap:</h4>
          <ul>
            <li>Calories: 40</li>
            <li>Protein: 1g</li>
            <li>Carbs: 22g</li>
            <li>Fat: 0.5g</li>
          </ul>

          <p>
            This meal is suitable for those on a low sodium diet...
          </p>
        </div>

        <div className="buttons">
          <button className="cook-btn">Cook</button>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
