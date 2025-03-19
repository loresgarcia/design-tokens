import React from "react";
import Button from "./components/Button";
import ToggleButton from "./components/ToggleButton";
import styled from "styled-components";
import { useTheme } from "./context/ThemeContext";

const AppContainer = styled.main`
    background-color: ${({ theme }) => theme.colors.background.primary};
    min-height: 100vh;
    padding: ${({ theme }) => theme.padding.medium};
    color: ${({ theme }) => theme.colors.text.body};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.medium};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.medium};
  justify-content: center;
`;

function App() {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <AppContainer theme={theme}>
      <ButtonContainer>
        <ToggleButton onClick={toggleTheme}>
          {isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro"}
        </ToggleButton>
        <Button>Botão acessível</Button>
      </ButtonContainer>
    </AppContainer>
  );
}

export default App;
