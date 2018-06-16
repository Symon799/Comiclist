// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import IssueList from './IssueList'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: [],
            searchtag: new URLSearchParams(location.search).get('tag')
        }
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))
        const query = new URLSearchParams(location.search);
        var urljson = 'http://localhost:4242/issues/' + this.state.searchtag;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
            })
    }

   render() {
       if (this.state.searchtag)
       {
            return (
                <div className="container">
                    <br/><h2>Search Result :</h2><br/>
                    <IssueList issueList={this.state.issueList}/>
                </div>
            )
        }
        else
        {
            return (
                <div className="container">
                    <br/><h2>Issues of the day :</h2><br/>
                    <IssueList issueList={this.state.issueList}/>
                </div>
            )
        }
    }
}

export default hot(module)(connect()(Search))