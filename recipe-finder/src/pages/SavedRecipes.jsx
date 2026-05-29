import { useMemo } from "react";
import SavedRecipeCard from "../components/SavedRecipeCard";

const SavedRecipes = ({ saved, removeRecipe }) => {
  const totalCookingTime = useMemo(() => {
    return saved.reduce((sum, recipe) => sum + recipe.cookingTime, 0);
  }, [saved]);

  return (
    <div className="page">
      <h1>Saved Recipes</h1>

      <h3>Total Saved: {saved.length}</h3>
      <h3>Total Cooking Time: {totalCookingTime} mins</h3>

      {saved.length === 0 ? (
        <p>No saved items yet</p>
      ) : (
        <div className="grid">
          {saved.map((recipe) => (
            <SavedRecipeCard
              key={recipe.id}
              recipe={recipe}
              removeRecipe={removeRecipe}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;