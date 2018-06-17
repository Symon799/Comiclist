// Register.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.updateUsername = this.updateUsername.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
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

    onClickButton() {
        console.log('click')
        fetch('http://localhost:4242/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                comics: []
            })
        }).then(response => response.json())
        .then(obj => this.props.history.push('/login'))
    }

    render() {
       return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <h4>Register</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <form>
                    <div>User name: <input type="text" name="username" onChange={this.updateUsername}/></div>
                    <div>Email: <input type="text" name="email" onChange={this.updateEmail}/></div>
                    <div>Password: <input type="password" name="password" onChange={this.updatePassword}/></div>
                </form>
                <button onClick={() => this.onClickButton()}>Register</button>
           </div>
       )
    }
}

export default hot(module)(connect()(Register))