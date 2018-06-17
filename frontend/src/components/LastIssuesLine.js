// LastIssuesLine.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { lastissues } from '../actions/actions'

class LastIssuesLine extends React.Component {
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
        console.log('search result : ', nextProps.result)
        this.setState({issueList : nextProps.result});
    }

    render() {
        if (this.state.issueList.length != 0)
        {
            return (
                this.state.issueList.results.slice(0, 6).map(function (item, i) {
                    return (
                        <div className="col-md-2">
                            <a href={"/issue/" + item.id}>
                                <img className="img rounded mb-3 mb-md-0" src={item.image.medium_url} alt="" width="170" height="230"/>
                            </a>
                            <center><h5>{item.volume.name.slice(0, 16)}</h5></center>
                        </div>
                    )
                })
            )
        }
        else
        {
            return (
                <div className="container">
                   <center>Loading...</center>
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

export default hot(module)(connect(mapStateToProps)(LastIssuesLine))