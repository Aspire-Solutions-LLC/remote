import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header";
import Routes from "./routes";
import theme from "./styled/theme";
import GlobalStyles from "./styled/global.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Application">
        <Header />
        {Routes}
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
