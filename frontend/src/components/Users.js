// Users.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { getUsers } from '../actions/actions'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getUsers());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({usersList : nextProps.usersList});
    }

   render() {
       if (this.state.usersList)
       {
            return (
                this.state.usersList.map(function (item, i) {
                    return (
                        <div className="container">
                            {i == 0?<div><br/><h1>User List</h1><br/></div>: null }
                            <a href={"/user/" + item._id}>
                            <div className="row">

                                
                                <div className="col-md-2">
                                    <img className="img-fluid rounded mb-3 mb-md-0" src="https://www.freeiconspng.com/uploads/profile-icon-9.png" width="30px"/>
                                </div><div className="col-md-4">
                                    <span className="font-weight-bold">Username : </span>
                                    {item.username}
                                </div>
                                <div className="col-md-4">
                                    <span className="font-weight-bold">Email : </span>
                                    {item.email}
                                </div>
                            </div>
                            </a>
                            <hr/>
                        </div>
                    )
                })
            )
        }
        else
        {
            return (
                <div className="container">
                    <br/><h1>Users list</h1>
                        Loading...
                </div>
            ) 
        }
    }
}

function mapStateToProps(state) {
    return {
        usersList: state.users.users
    }
}

export default hot(module)(connect(mapStateToProps)(Users))