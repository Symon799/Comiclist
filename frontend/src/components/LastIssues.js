// LastIssues.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import IssueList from './IssueList'
import { lastissues } from '../actions/actions'

class LastIssues extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        this.props.dispatch(lastissues())
    }

    componentWillReceiveProps(nextProps) {
        this.setState({issueList : nextProps.result});
    }

   render() {
       if (this.state.issueList)
       {
            return (
                <div className="container">
                    <br/><h2>Last added Issues :</h2><br/>
                    <IssueList issueList={this.state.issueList}/>
                </div>
            )
        }
        else
        {
            return (
                <div className="container">
                    <br/>
                    <center>Loading...</center>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        result: state.search.result
    }
}

export default hot(module)(connect(mapStateToProps)(LastIssues))