// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';
import IssueList from './IssueList'


class Search extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
        return (
            <div class="container">
                <br/><h1>Search Result :</h1><br/>
                <IssueList/>
            </div>
        )
    }
}

export default hot(module)(connect()(Search))