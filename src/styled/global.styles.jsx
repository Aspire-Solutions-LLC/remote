import { createGlobalStyle } from "styled-components";
import { reset as resetStyles } from "styled-reset";

const GlobalStyles = createGlobalStyle`
${resetStyles};
*, *:before, *:after {
  margin:0; 
  padding:0; 
  box-sizing:border-box;
}
body {
}
.Application {
  width:100vw;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  text-align:center;
  overflow:hidden;
  background:${props => props.theme.colors.white};
}
h1,h2,h3,h4,h5,h6 {
  font-family: myriad-pro, sans-serif;
  font-weight: 700;
}
p,li,span,input, select, option, textarea {
  font-family: myriad-pro, sans-serif;
  font-weight:400;
}
h1 {
    font-size:36px;
}
h2 {
    font-size:24px;
}
`;

export default GlobalStyles;
