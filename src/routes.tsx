import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Country from "pages/country";
import Home from "pages/home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country" component={Country} />
      </Switch>
    </Router>
  );
}
