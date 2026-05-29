import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

const RecipeDetails = ({ saved, saveRecipe }) => {
  const { recipeId } = useParams();

  const recipe = recipes.find((item) => item.id === Number(recipeId));

  if (!recipe) {
    return (
      <div className="page">
        <h1>Item not found</h1>
        <Link to="/recipes">
          <button>Back to Recipes</button>
        </Link>
      </div>
    );
  }

  const isSaved = saved.some((item) => item.id === recipe.id);

  return (
    <div className="page">
      <div className="details">
        <h1>{recipe.title}</h1>
        <p>Category: {recipe.category}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Cooking Time: {recipe.cookingTime} mins</p>
        <p>{recipe.description}</p>

        <button onClick={() => saveRecipe(recipe)} disabled={isSaved}>
          {isSaved ? "Saved" : "Save Recipe"}
        </button>

        <Link to="/recipes">
          <button>Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;