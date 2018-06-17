// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import IssueElt from './IssueElt'
import cookie from 'react-cookies';


class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: [],
            issueList: [],
            logged: false
        }
    }

    componentDidMount() {
        let userId;
        if (this.props.userId)
        {
            userId = this.props.userId;
        }
        else
        {
            userId = cookie.load('userId');
        }

        if (userId)
        {
            this.setState({logged : true});

            let urljson = 'http://localhost:4242/users/' + userId;
            fetch(urljson, {timeout: 5000})
                .then((response) => response.json())
                .then(objUser => {
                    objUser.comics.forEach(element => {
                        let urljson = 'http://localhost:4242/issue/' + element;
                        fetch(urljson, {timeout: 5000})
                            .then((response) => response.json())
                            .then(obj => {
                                this.state.issueList.push(obj.results);
                                this.setState({comics : objUser.comics});
                            })
                    });
                }
            )
        }
    }

   render() {
        if (this.state.logged == false)
        {
            return (
                <div className="container">
                    <br/><h1>My List</h1><br/>
                    Connect or create an account to keep track of your comics!
                </div>
            )
        }

        if (this.state.issueList)
        {
            if (this.state.comics.length != 0)
            {
                return (
                    this.state.issueList.map(function (item, i) {
                        return (
                            <div className="container">
                                {i == 0?<div><br/><h1>Watched :</h1><br/></div>: null }
                                <IssueElt key={i} id={item.id} name={item.name} issueNb={item.issue_number} site ={item.site_detail_url} date ={item.cover_date} volume = {item.volume.name} image ={item.image.thumb_url}/>
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
                        <br/><h1>My List</h1><br/>
                        <center>Loading... (No Issues Addded ?)</center>
                    </div>
                )
            }
        }
    }
}

export default hot(module)(connect()(MyList))