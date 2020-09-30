import React from "react";
import Routes from "routes";
import { ThemeProvider } from "theme-context";

import "styles/base.scss";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
