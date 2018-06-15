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
        const searchtag = query.get('tagg');
        console.log(searchtag);
        
        var urljson = 'http://localhost:4242/issues/' + searchtag;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
            })
    }

   render() {
        return (
            <div class="container">
                <br/><h1>Search Result :</h1><br/>
                <IssueList issueList={this.state.issueList}/>
            </div>
        )
    }
}

export default hot(module)(connect()(Search))