import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Recipe Finder</h1>
      <p>Explore recipes, view details, and save your favourite recipes.</p>

      <Link to="/recipes">
        <button>Explore Recipes</button>
      </Link>

      <div className="summary">
        <h3>Features</h3>
        <p>Search recipes, filter by category, save recipes, and use dark mode.</p>
      </div>
    </div>
  );
};

export default Home;