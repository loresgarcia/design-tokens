import styled from "styled-components";

const AppContainer = styled.main`
    background-color: ${({ theme }) => theme.colors.background.primary};
    min-height: 100vh;
    padding: ${({ theme }) => theme.padding.medium};
    color: ${({ theme }) => theme.colors.text.body};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.medium};
`;

export default AppContainer;
