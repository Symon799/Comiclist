// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import IssueList from './IssueList'
import { search } from '../actions/actions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: [],
            searchtag: new URLSearchParams(location.search).get('tag')
        }
    }

    componentDidMount() {
        console.log('test')
        this.props.dispatch(search(this.state.searchtag))
    }

    componentWillReceiveProps(nextProps) {
        console.log('search result : ', nextProps.result)
        this.setState({issueList : nextProps.result});
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

function mapStateToProps(state) {
    console.log('search state', state)
    return {
        result: state.search.result
    }
}

export default hot(module)(connect(mapStateToProps)(Search))