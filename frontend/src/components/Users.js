// Users.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {        
        var urljson = 'http://localhost:4242/users';
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                console.log(obj);
                this.setState({usersList : obj});
            })
    }

   render() {
       if (this.state.usersList)
       {
            return (
                this.state.usersList.map(function (item, i) {
                    return (
                        <div className="container">
                            {i == 0?<div><br/><h1>User List</h1><br/></div>: null }
                            <div className="row">
                                <div className="col-md-5">
                                    <span className="font-weight-bold">Username : </span>
                                    {item.username}
                                </div>
                                <div className="col-md-7">
                                    <span className="font-weight-bold">Email : </span>
                                    {item.email}
                                </div>
                                <div className="col-md-7">
                                    <span className="font-weight-bold">Id : </span>
                                    {item._id}
                                </div>
                            </div>
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

export default hot(module)(connect()(Users))