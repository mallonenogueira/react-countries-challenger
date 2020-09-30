import React, { useContext } from "react";
import { ThemeContext } from "theme-context";

import "./style.scss";

export default function ThemeSwitch() {
  const { theme, toggleDarkTheme } = useContext(ThemeContext);

  const content =
    theme === "light"
      ? { icon: "far fa-moon", text: "Dark Mode" }
      : { icon: "far fa-sun", text: "Light Mode" };

  return (
    <button onClick={toggleDarkTheme} className="theme-switch">
      <i className={content.icon}></i>
      {content.text}
    </button>
  );
}
