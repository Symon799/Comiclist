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
        this.setState({
            userId: cookie.load('userId')
        }) 
    }

    componentWillReceiveProps(nextProps) {
        console.log('id layout : ', nextProps.userId)
        cookie.save('userId', nextProps.userId, { path: '/' })
        this.setState({
            userId: cookie.load('userId')
        })
    }

    logOut() {
        cookie.remove('userId', { path: '/' })
        this.setState({
            userId: cookie.load('userId')
        })
    }

    render() {
        const { userId } = this.state
        let account;
        let profile;
        let mylist;
        
        if (userId) {
            account = <a className="nav-link" onClick={() => this.logOut()}>Logout</a>
            profile = <a className="nav-link" href="/profile">Profile</a>
            mylist = <a className="nav-link" href="/mylist">MyList</a>
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
            profile = <div></div>
            mylist = <div></div>
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
                            <a className="nav-link" href="/issues">Issues</a>
                        </li>
                        <li className="nav-item">
                            { mylist }
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">Users</a>
                        </li>
                        <li className="nav-item">
                            { profile }
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
