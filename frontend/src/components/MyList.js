// Search.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import IssueElt from './IssueElt'


class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: [],
            issueList: []
        }
    }

    componentDidMount() {
        var urljson = 'http://localhost:4242/users/' + cookie.load('userId');
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({comics : obj.comics});

                this.state.comics.forEach(element => {
                    var urljson = 'http://localhost:4242/issue/' + element;
                    fetch(urljson, {timeout: 5000})
                        .then((response) => response.json())
                        .then(obj => {
                            this.state.issueList.push(obj.results);
                            this.setState({comics : this.state.issueList.comics});
                        })
                });
            }
        )
    }

   render() {
        if (this.state.issueList && this.state.issueList.length != 0)
        {
            return (
                this.state.issueList.map(function (item, i) {
                    return (
                        <div className="container">
                            {i == 0?<div><br/><h1>My List</h1><br/></div>: null }
                            <IssueElt key={i} id={item.id} name={item.name} issueNb={item.issue_number} site ={item.site_detail_url} date ={item.cover_date} volume = {item.volume.name} image ={item.image.thumb_url}/>
                            <hr/>
                        </div>
                    )
                })
            )
        }
        return (
            <div className="container">
                <br/><h1>My List</h1><br/>
                Loading...
            </div>
        )
    }
}

export default hot(module)(connect()(MyList))