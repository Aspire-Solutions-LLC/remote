import React from "react";
import remote from "../../assets/remote.svg";
import Styled from "./index.styles";

const Index = () => {
  return (
    <Styled.Hero>
      <img src={remote} alt="Illustration of a remote worker at her laptop" />
    </Styled.Hero>
  );
};

export default Index;
