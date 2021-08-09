import React from "react";
import { Route, Switch } from "react-router";
import { Home, Reset, Signin } from "../pages";
import Auth from "../pages/Auth";
import ProductsEdit from "../pages/ProductsEdit";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signin/reset" component={Reset} />
      <Route exact path="/signup" component={SignUp} />
      <Auth>
        <Route exact path="(/)?" component={Home} />
        <Route path={"/product/edit(/:id)?"} component={ProductsEdit} />
      </Auth>
    </Switch>
  );
};

export default Router;
