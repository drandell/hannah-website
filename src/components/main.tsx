import React, { Component } from 'react';
import { Home } from './home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactMe } from './contact-me';

export class Main extends Component {

    render() {
        return (
            <Router>
                <Route path="/contact-me" exact component={ContactMe} /> 
                <Route path="/" exact component={Home} />
            </Router>
        );
    }
}
