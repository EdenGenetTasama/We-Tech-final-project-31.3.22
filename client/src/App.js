import React from "react";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Context/theme.js"
import AppRouter from "./AppRouter";




function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div  style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="buttonBackground"><button type="button" onClick={toggleTheme} className="ToggleButton">
        Toggle theme
      </button></div>
      <AppRouter/>
    </div>

  );
}

export default App;
