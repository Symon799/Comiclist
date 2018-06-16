// Login.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
    }

    updateUsername(username) {
        this.setState({
            username: username.target.value
        })
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        })
    }

    onClickButton() {
        console.log('click')
        fetch('http://localhost:4242/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(response => response.json())
        .then(obj => console.log(obj))
    }

    render() {
       return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <h4>Login</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <form>
                    <div>User name: <input type="text" name="username" onChange={this.updateUsername}/></div>
                    <div>Password: <input type="password" name="password" onChange={this.updatePassword}/></div>
                </form>
                <button onClick={() => this.onClickButton()}>Log in</button>
           </div>
       )
    }
}

export default hot(module)(connect()(Login))