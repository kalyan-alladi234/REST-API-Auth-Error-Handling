import React from "react";

const SavedRecipeCard = ({ recipe, removeRecipe }) => {
  return (
    <div className="card">
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <p>Cooking Time: {recipe.cookingTime} mins</p>
      <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
    </div>
  );
};

export default React.memo(SavedRecipeCard);