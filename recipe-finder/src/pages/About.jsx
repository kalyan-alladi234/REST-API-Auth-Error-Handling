const About = () => {
  return (
    <div className="page">
      <h1>About Recipe Finder</h1>
      <p>
        This is a Recipe Finder App where users can explore recipes, search,
        filter by category, view details, and save favourite recipes.
      </p>

      <h3>Main Features</h3>
      <ul>
        <li>React Router navigation</li>
        <li>Search and filter recipes</li>
        <li>Dynamic details page</li>
        <li>Saved recipes page</li>
        <li>Light and dark theme using Context API</li>
        <li>useMemo, useCallback, useRef, React.memo</li>
      </ul>
    </div>
  );
};

export default About;