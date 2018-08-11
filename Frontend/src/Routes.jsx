import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Testing from "./components/Testing";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/testing" component={Testing} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
    </Switch>;