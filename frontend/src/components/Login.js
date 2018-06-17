// Login.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import { login } from '../actions/actions'

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

    componentWillReceiveProps(nextProps) {
        console.log('id : ', nextProps.userId)
        this.props.history.push('/');
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
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.dispatch(login(user))
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
                <div className="container">
                    <br/>
                    <form>
                        <div class="form-group">
                        <div>User name: <input type="text" className="form-control" name="username" onChange={this.updateUsername}/></div>
                        <div>Password: <input type="password" className="form-control" name="password" onChange={this.updatePassword}/></div>
                        </div>
                    </form>
                    <button className="btn btn-primary" onClick={() => this.onClickButton()}>Log in</button>
                </div>
            </div>
       )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.log.logged
    }
}

export default hot(module)(connect(mapStateToProps)(Login))