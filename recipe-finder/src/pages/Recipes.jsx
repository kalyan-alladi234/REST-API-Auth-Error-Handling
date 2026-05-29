import { useMemo, useRef, useState } from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

const Recipes = ({ saved, saveRecipe }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const searchRef = useRef(null);

  const categories = ["All", "Indian", "Chinese", "Italian", "Mexican", "Continental"];

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || recipe.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const focusSearch = () => {
    searchRef.current.focus();
  };

  return (
    <div className="page">
      <h1>Explore Recipes</h1>

      <div className="controls">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button onClick={focusSearch}>Focus Search</button>
      </div>

      <h3>Showing {filteredRecipes.length} results</h3>

      <div className="grid">
        {filteredRecipes.map((recipe) => {
          const isSaved = saved.some((item) => item.id === recipe.id);

          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              saveRecipe={saveRecipe}
              isSaved={isSaved}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;