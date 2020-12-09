import React, { Component } from 'react';
import { Home } from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Main extends Component {

    render() {
        return (
            <Router basename={`${process.env.PUBLIC_URL}/`}>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        );
    }
}
