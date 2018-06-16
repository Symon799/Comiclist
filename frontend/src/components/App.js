// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import Search from './Search'
import Home from './Home'
import Layout from './Layout'
import Issue from './Issue'
import Users from './Users'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Layout/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/issue" component={Issue}/>
                        <Route exact path="/users" component={Users}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default hot(module)(App)