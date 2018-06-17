// Profile.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import MyList from './MyList'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            comics: []
        }
        this.updateUsername = this.updateUsername.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updatePassword2 = this.updatePassword2.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:4242/users/' + cookie.load('userId'), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
        .then(obj => {
            this.setState({
                username: obj.username,
                email: obj.email,
                password: obj.password,
                password2: obj.password
            })
        })
    }

    updateUsername(username) {
        this.setState({
            username: username.target.value
        })
    }

    updateEmail(email) {
        this.setState({
            email: email.target.value
        })
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        })
    }

    updatePassword2(password2) {
        this.setState({
            password2: password2.target.value
        })
    }

    onClickButton() {
        if (this.state.password === this.state.password2 && this.state.password !== '') {
            fetch('http://localhost:4242/users/' + cookie.load('userId'), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
            .then(obj => {
                this.setState({
                    comics: obj.comics
                })

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
                .then(this.props.history.push('/'))
            })
        } else {
            this.setState({
                password: "",
                password2: ""
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        <h4>Profile</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <form>
                        <br/>
                        <div>User name: <input type="text" className="form-control"  name="username" value={this.state.username} onChange={this.updateUsername}/></div>
                        <div>Email: <input type="text" className="form-control"  name="email" value={this.state.email} onChange={this.updateEmail}/></div>
                        <div>New Password: <input type="password" className="form-control"  name="password" value={this.state.password} onChange={this.updatePassword}/></div>
                        <div>Confirm New Password: <input type="password" className="form-control"  name="password2" value={this.state.password2} onChange={this.updatePassword2}/></div>
                    </form>
                    <br/>
                    <button className="btn btn-primary" onClick={() => this.onClickButton()}>Edit Profile</button>
                </div>
                <div>
                    <MyList/>
                </div>
            </div>
        )
     }
}

export default hot(module)(connect()(Profile))