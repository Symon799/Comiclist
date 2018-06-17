// LastIssues.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import IssueList from './IssueList'


class LastIssues extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))
        var urljson = 'http://localhost:4242/lastissues';
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
            })
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

export default hot(module)(connect()(LastIssues))