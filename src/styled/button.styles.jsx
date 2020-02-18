import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
`;

export default StyledButton;
