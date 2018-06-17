// IssueElt.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'


class IssueElt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: [],
            logged: false
        }
        this.addToWatch = this.addToWatch.bind(this)
        this.DeleteComic = this.DeleteComic.bind(this)
        this.isInComics = this.isInComics.bind(this)
    }

    componentDidMount() {
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
        else
        {
            this.setState({logged : false});
        }
    }

    isInComics(addId)
    {
        var isInComics = false;
        this.state.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });
        return isInComics;
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

    isInComics(addId)
    {
        var isInComics = false;
        this.state.comics.forEach(element => {
            if (element == addId)
                isInComics = true;
        });
        return isInComics;
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