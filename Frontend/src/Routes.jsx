import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Testing from "./components/Testing";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/testing" component={Testing} />
    </Switch>;