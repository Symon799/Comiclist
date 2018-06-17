// IssueElt.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'


class IssueElt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            user: []
        }
        this.addToWatch = this.addToWatch.bind(this)
        this.DeleteComic = this.DeleteComic.bind(this)
        this.isInComics = this.isInComics.bind(this)
    }

    componentDidMount() {
        let userId = cookie.load('userId');
        if (userId)
        {
            let urljson = 'http://localhost:4242/users/' + userId;
            fetch(urljson, {timeout: 5000})
                .then((response) => response.json())
                .then(obj => {
                    this.setState({user : obj, logged : true});
                }
            )
        }
        else
        {
            this.setState({logged : false});
        }
    }

    isInComics(addId)
    {
        let isInComics = false;
        this.state.user.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });
        return isInComics;
    }

    addToWatch(addId) {
        if (this.isInComics(addId) == false)
        {
            fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
            .then(obj => {
                
                this.setState({user: obj})
                this.state.user.comics.push(addId);

                fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.user.username,
                    email: this.state.user.email,
                    password: this.state.user.password,
                    comics: this.state.user.comics
                })
            }).then(response => response.json())
            .then(obj => this.setState({user: this.state.user}))
        
            })
        }
    }

    DeleteComic(addId) {
        if (this.isInComics(addId))
        {
            fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
            .then(obj => {

                this.setState({user: obj})
                for(let i = this.state.user.comics.length - 1; i >= 0; i--) {
                    if (this.state.user.comics[i] === addId) {
                        this.state.user.comics.splice(i, 1);
                        this.setState({user: this.state.user});
                    }
                }

                fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: this.state.user.username,
                        email: this.state.user.email,
                        password: this.state.user.password,
                        comics: this.state.user.comics
                    })
                }).then(response => response.json())
                .then(obj => this.setState({user: this.state.user}))
            })
        }
    }

   render() {
        let button = <div></div>;
        if (this.state.logged)
        {
            if (this.isInComics(this.props.id) == false)
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