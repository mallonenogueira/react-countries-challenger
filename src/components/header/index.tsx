import React from "react";
import ThemeSwitch from "components/theme-switch";

import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>Where in the world?</h1>

      <ThemeSwitch />
    </header>
  );
}
