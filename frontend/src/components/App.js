// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import Search from './Search'
import Home from './Home'
import Layout from './Layout'
import Issue from './Issue'
import Users from './Users'
import Footer from './Footer'
import Register from './Register'
import Login from './Login'
import LastIssues from './LastIssues';
import MyList from './MyList'
import User from './User'
import Profile from './Profile'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

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
                        <Route exact path="/issues" component={LastIssues}/>
                        <Route path="/issue/:id" component={Issue}/>
                        <Route path="/user/:id" component={User}/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/mylist" component={MyList}/>
                        <Route exact path="/profile" component={Profile}/>
                    </Switch>
                </Router>
                <Footer/>

            </div>
        )
    }
}

export default hot(module)(App)