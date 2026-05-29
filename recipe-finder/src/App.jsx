import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "app dark" : "app light"}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;