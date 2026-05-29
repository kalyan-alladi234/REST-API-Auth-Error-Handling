import { Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import SavedRecipes from "../pages/SavedRecipes";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  const [saved, setSaved] = useState([]);

  const saveRecipe = useCallback((recipe) => {
    setSaved((prev) => {
      const alreadySaved = prev.find((item) => item.id === recipe.id);

      if (alreadySaved) {
        alert("Recipe already saved");
        return prev;
      }

      return [...prev, recipe];
    });
  }, []);

  const removeRecipe = useCallback((id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/recipes"
        element={<Recipes saved={saved} saveRecipe={saveRecipe} />}
      />
      <Route
        path="/recipes/:recipeId"
        element={<RecipeDetails saved={saved} saveRecipe={saveRecipe} />}
      />
      <Route
        path="/saved"
        element={<SavedRecipes saved={saved} removeRecipe={removeRecipe} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;