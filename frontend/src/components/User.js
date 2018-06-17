// User.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { getUser } from '../actions/actions'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetail: []
        }
    }

    componentDidMount() {
        const idUser = this.props.match.params.id;
        this.props.dispatch(getUser(idUser))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({userDetail : nextProps.userDetails});
    }

   render() {
       if (this.state.userDetail)
       {
            return (
                <div className="container">
                <br/>
                    <div className="jumbotron">
                        <center>
                            <img className="img-fluid rounded mb-3 mb-md-0" src="https://www.freeiconspng.com/uploads/profile-icon-9.png" width="150px"/>
                            <h5><span className="font-weight-bold"> Username : </span>{this.state.userDetail.username}</h5>
                            <h5><span className="font-weight-bold"> Email : </span>{this.state.userDetail.email}</h5>
                            <h5><span className="font-weight-bold"> Id : </span>{this.state.userDetail._id}</h5>
                        </center>
                    </div>
                </div>

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
        userDetails: state.user.user
    }
}

export default hot(module)(connect(mapStateToProps)(User))