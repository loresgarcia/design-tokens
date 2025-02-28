import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Button from "./components/Button";
import "./App.css";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div style={{ 
        background: isDarkMode ? darkTheme.colors.background : lightTheme.colors.background, 
        height: "100vh", 
        padding: "20px",
        color: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text 
      }}>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Alternar tema
        </button>
        <Button>Botão acessível</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
