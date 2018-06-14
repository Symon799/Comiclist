// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import IssueList from './IssueList'
import Button from './Button'
import Form from './Form';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="container">
                <h1 class="my-4">Issues</h1>
                <IssueList/>
            </div>
        )
    }
}

export default hot(module)(App)