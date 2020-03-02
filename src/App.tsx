import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Switch, Route, Redirect } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
