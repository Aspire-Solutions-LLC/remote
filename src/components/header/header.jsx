import React from "react";
import { Link } from "react-router-dom";
import Styled from "./header.styles";
import StyledButton from "../../styled/button.styles";

const Header = () => {
  return (
    <Styled.Header>
      <Link to="/">
        <h1>Aspire Jobs</h1>
      </Link>
      <Styled.LoginLink to="/login">
        <StyledButton type="button">Login</StyledButton>
      </Styled.LoginLink>
    </Styled.Header>
  );
};

export default Header;
