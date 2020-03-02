import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UnderConstruction from "./pages/UnderConstruction";
import { Switch, Route, Redirect } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/contacts">
        <UnderConstruction />
      </Route>
      <Route path="/team">
        <UnderConstruction />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
