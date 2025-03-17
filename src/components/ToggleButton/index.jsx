import styled from "styled-components";
import Button from "../Button";

const ToggleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borderWidth.thin} solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.padding.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};  
    color: ${({ theme }) => theme.colors.primary}; 
  }
`;


export default ToggleButton;
