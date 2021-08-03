import React from "react";
import { Route, Switch } from "react-router";
import { Home, Signin } from "../pages";
import Auth from "../pages/Auth";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={SignUp} />

      <Auth>
        <Route exact path="(/)?" component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
