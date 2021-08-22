import React from "react";
import { Route, Switch } from "react-router";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import ProductsEdit from "../pages/ProductsEdit";
import SignUp from "../pages/SignUp";
import Reset from "../pages/Reset";
import Signin from "../pages/Signin";
import ProductsDetail from "../pages/ProductsDetail";
import Create from "../pages/Create";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signin/reset" component={Reset} />
      <Route exact path="/signup" component={SignUp} />
      <Auth>
        <Route exact path="(/)?" component={Home} />
        <Route exact path="/users/create" component={Create} />
        <Route path={"/product/edit(/:id)?"} component={ProductsEdit} />
        <Route path={"/product/detail/:id"} component={ProductsDetail} />
      </Auth>
    </Switch>
  );
};

export default Router;
