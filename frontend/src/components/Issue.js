// Issue.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Issue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))

        //const query = new URLSearchParams(location.search);
        //const idIssue = query.get('tag');
        const idIssue = this.props.match.params.id;
        var urljson = 'http://localhost:4242/issue/' + idIssue;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
            })
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

    //<IssueElt key={i} name={item.name} issueNb={item.issue_number} site ={item.site_detail_url} date ={item.cover_date} volume = {item.volume.name} image ={item.image.thumb_url}/>

}

export default hot(module)(connect()(Issue))