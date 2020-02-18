import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/index/index";

/* eslint-disable react/jsx-props-no-spreading */

const Routes = (
  <Switch>
    <Route exact path="/" render={props => <Index {...props} />} />
  </Switch>
);
export default Routes;
