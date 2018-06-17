// Issue.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { getIssue } from '../actions/actions'

class Issue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        const idIssue = this.props.match.params.id;
        this.props.dispatch(getIssue(idIssue))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({issueList : nextProps.issueDetails});
    }

    render() {
       if (this.state.issueList.results)
       {
            let item = this.state.issueList.results;
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        <h4>{item.volume.name} #{item.issue_number} - {item.name}</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <div className="container">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="jumbotron">
                                        <a href="#">
                                            <img className="img-fluid rounded mb-3 mb-md-0" src={item.image.medium_url}/>
                                        </a>
                                        <br/><br/><br/>
                                        <h5><span className="font-weight-bold">Volume Name : </span>{item.volume.name}</h5>
                                        <h5><span className="font-weight-bold">Issue Number : </span>{item.issue_number}</h5>
                                        <h5><span className="font-weight-bold">Cover Date : </span>{item.cover_date}</h5>
                                        <h5><span className="font-weight-bold">In Store Date : </span>{item.store_date}</h5>
                                    </div>
                                    <a className="btn btn-primary" href={item.site_detail_url}> + Add to my list</a>
                                </div>
                                <div className="col-md-7">
                                    <h5>Description</h5>
                                    <hr/>
                                    {item.description?ReactHtmlParser(item.description): <div>No description.</div> }
                                </div>
                            </div>
                        </div>
                    </div>
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
        issueDetails: state.issue.issue
    }
}

export default hot(module)(connect(mapStateToProps)(Issue))