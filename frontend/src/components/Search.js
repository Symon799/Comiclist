// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';
import IssueList from './IssueList'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))

        const query = new URLSearchParams(location.search);
        const searchtag = query.get('tag');
        
        var urljson = 'http://localhost:4242/issues/' + searchtag;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
            })
    }

   render() {
       if (this.state.issueList.results)
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