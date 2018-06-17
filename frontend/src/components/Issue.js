// Issue.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import { getIssue } from '../actions/actions'
import cookie from 'react-cookies'


class Issue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: [],
            comics: [],
            logged: false
        }
        this.isInComics = this.isInComics.bind(this)
        this.addToWatch = this.addToWatch.bind(this)
        this.DeleteComic = this.DeleteComic.bind(this)

    }

    componentDidMount() {
        const idIssue = this.props.match.params.id;
        this.props.dispatch(getIssue(idIssue))

        let userId = cookie.load('userId');
        if (userId)
        {
            var urljson = 'http://localhost:4242/users/' + userId;
            fetch(urljson, {timeout: 5000})
                .then((response) => response.json())
                .then(obj => {
                    this.setState({comics : obj.comics, logged : true});
                }
            )
        }
    }

    addToWatch(addId) {
        if (this.isInComics(addId) == false)
        {

            console.log(this.state.comics);
            this.state.comics.push(addId);
            this.setState({comics: this.state.comics});
            console.log(this.state.comics);


            fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    comics: this.state.comics
                })
            }).then(response => response.json())
            .then(obj => this.setState({comics: this.state.comics}))
        }
    }

    DeleteComic(addId) {
        if (this.isInComics(addId))
        {
            for(var i = this.state.comics.length - 1; i >= 0; i--) {
                if (this.state.comics[i] === addId) {
                    this.state.comics.splice(i, 1);
                    this.setState({comics: this.state.comics});
                }
            }

            fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    comics: this.state.comics
                })
            }).then(response => response.json())
            .then(obj => this.setState({comics: this.state.comics}))
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({issueList : nextProps.issueDetails});
    }

    isInComics(addId)
    {
        var isInComics = false;
        console.log(this.state.comics, addId);
        this.state.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });
        return isInComics;
    }

    render() {
        if (this.state.issueList.results)
        {
            let item = this.state.issueList.results;
            let button = <div></div>;
            if (this.state.logged)
            {
                if (this.isInComics(item.id) == false)
                {
                    button = (
                        <div className="container">
                            <a className="btn btn-primary text-white float-right" onClick={() => this.addToWatch(item.id)}>+ Watched</a>
                        </div>
                    )
                    
                }
                else
                {
                    button = (
                        <div className="container">
                            <a className="btn btn-danger text-white float-right" onClick={() => this.DeleteComic(item.id)}>-  not Watched</a>
                        </div>
                    )
                }
            }

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
                                    {button}
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