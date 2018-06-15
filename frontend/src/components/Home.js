// Home.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
        return (
            <div className="container">
                <br/><h1>Last issues</h1>
                    last issues
                <br/><h1>Watching</h1>
                    issues Watching
                <br/><h1>Watched</h1>
                    issues watched
            </div>
        )
    }
}

export default hot(module)(connect()(Home))