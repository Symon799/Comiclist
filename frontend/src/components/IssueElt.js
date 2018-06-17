// IssueElt.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'


class IssueElt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: []
        }
        this.addToWatch = this.addToWatch.bind(this)
        this.DeleteComic = this.DeleteComic.bind(this)
        this.isInComics = this.isInComics.bind(this)
    }

    componentDidMount() {
        var urljson = 'http://localhost:4242/users/' + cookie.load('userId');
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({comics : obj.comics});
            }
        )
    }

    addToWatch(addId) {
        let isInComics = false;
        this.state.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });

        this.state.comics.push(addId);

        if (isInComics == false)
        {
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
        let isInComics = false;

        for(var i = this.state.comics.length - 1; i >= 0; i--) {
            if (this.state.comics[i] === addId) {
                isInComics = true;
                this.state.comics.splice(i, 1);
            }
        }

        if (isInComics == true)
        {
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

    isInComics(addId)
    {
        var isInComics = false;
        this.state.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });
        return !isInComics;
    }

   render() {
        let button = <div></div>;
        if (this.isInComics(this.props.id) == true)
        {
            button = (
                <div className="container">
                    <a className="btn btn-primary text-white float-right" onClick={() => this.addToWatch(this.props.id)}>+ Watched</a>
                </div>
            )
            
        }
        else
        {
            button = (
                <div className="container">
                    <a className="btn btn-danger text-white float-right" onClick={() => this.DeleteComic(this.props.id)}>X</a>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a href={"/issue/" + this.props.id}>
                            <img className="img-fluid rounded mb-3 mb-md-0" src={this.props.image} alt="" width="104" height="160" />
                        </a>
                    </div>
                    <div className="col-md-9">
                        <a href={"/issue/" + this.props.id}>
                            <h4>{this.props.volume} #{this.props.issueNb} - {this.props.name}</h4>
                            <h6><span className="badge badge-secondary">{this.props.date}</span></h6>
                        </a>
                    </div>
                    <div className="col-md-1">
                        {button}
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(connect()(IssueElt))