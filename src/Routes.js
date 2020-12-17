import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About, { Profile } from "./Profile";
import App from "./App";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Profile" Component={Profile}/>
            </Switch>
        </Router>
        )
    }
}
