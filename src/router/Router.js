import React from "react";
import { Route, Switch } from "react-router";
import { Home, Login } from "../pages";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Router;
