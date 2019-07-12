import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import Home from "./containers/Home";
import Testing from "./components/Testing";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewRide from "./containers/NewRide";
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <AppliedRoute path="/testing" exact component={Testing} props={childProps}/>
        <AppliedRoute path="/login" exact component={Login} props={childProps}/>
        <AppliedRoute path="/signup" exact component={Signup} props={childProps}/>
        <AppliedRoute path="/rides/new" exact component={NewRide} props={childProps}/>
        <Route component={NotFound} />
    </Switch>;