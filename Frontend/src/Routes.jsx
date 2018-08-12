import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import Home from "./containers/Home";
import Testing from "./components/Testing";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <AppliedRoute path="/testing" component={Testing} props={childProps}/>
        <AppliedRoute path="/login" component={Login} props={childProps}/>
        <Route component={NotFound} />
    </Switch>;