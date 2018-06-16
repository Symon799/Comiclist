// Layout.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this)
    }

    componentWillMount() {
        console.log('mount')
        this.setState({
            userId: cookie.load('userId')
        }) 
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            userId: cookie.load('userId')
        })
    }

    logOut() {
        console.log('log out')
        cookie.remove('userId', { path: '/' })
        this.setState({
            userId: cookie.load('userId')
        })
    }

    render() {
        const { userId } = this.state
        let account;
        console.log('user id ' + userId)
        if (userId) {
            account = (
                <a className="nav-link" onClick={() => this.logOut()}>Logout</a>
            )
        } else {
            account = (
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/login">Login</a>
                        <a className="dropdown-item" href="/register">Register</a>
                    </div>
                </div>
            )
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="http://wfarm3.dataknet.com/static/resources/icons/set99/354bd043.png" alt="logo" width="35px" height="35px"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Issues</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mylist">MyList</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">Users</a>
                        </li>
                    </ul>
                    <form className="navbar-form pull-right" action='/search' method="get">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search issues" name="tag"/>
                            <div className="input-group-btn">
                                <button className="btn btn-secondary" type="submit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/768px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" width="30px" height="30px"/></button>
                            </div>
                        </div>
                    </form>
                    <li role="separator" className="divider"></li>
                    <ul className="navbar-nav pull-right">
                        <li className="nav-item">
                            { account }
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.log.logged
    }
}

export default hot(module)(connect(mapStateToProps)(Layout))
