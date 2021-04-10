import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import InitialPage from "./InitialPage";
import Projects from "./ProjectsDetails/Projects";
import Resume from "./Resume";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={InitialPage} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Projects" component={Projects} />
    </Switch>
  );
}

export default Main;
