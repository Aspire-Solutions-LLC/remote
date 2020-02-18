import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  background: ${props => props.theme.bgColor};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: ${props => props.theme.colors.white};
  text-shadow: 2px 2px 8px ${({ theme }) => theme.colors.primary};

  a {
    color: white;
    text-decoration: none;
  }
`;
const LoginLink = styled(Link)``;
const Styled = { Header, LoginLink };
export default Styled;
