import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme"; // Importando os temas
import GlobalStyle from "./theme/GlobalStyle"; // Importando o GlobalStyle
import AppContainer from "./components/AppContainer";
import Button from "./components/Button";
import ToggleButton from "./components/ToggleButton";
import styled from "styled-components";

// Componente de contêiner de botões
const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.medium};
  justify-content: center;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const theme = isDarkMode ? darkTheme : lightTheme; 

  const toggleTheme = () => setIsDarkMode(!isDarkMode); 

  return (
    <StyledThemeProvider theme={theme}> 
      <GlobalStyle />
      <AppContainer>
        <ButtonContainer>
          <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro"}
          </ToggleButton>
          <Button>Botão acessível</Button>
        </ButtonContainer>
      </AppContainer>
    </StyledThemeProvider>
  );
}

export default App;
