import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, saveRecipe, isSaved }) => {
  return (
    <div className="card">
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Cooking Time: {recipe.cookingTime} mins</p>

      <Link to={`/recipes/${recipe.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={() => saveRecipe(recipe)} disabled={isSaved}>
        {isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default React.memo(RecipeCard);