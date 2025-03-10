import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { useState } from "react";

import AppContainer from "./components/AppContainer";
import Button from "./components/Button";
import ToggleButton from "./components/ToggleButton";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.medium}; 
  justify-content: center;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <ButtonContainer>
          <ToggleButton onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro"}
          </ToggleButton>
          <Button>Botão acessível</Button>
        </ButtonContainer>

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
