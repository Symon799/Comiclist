// IssueList.js
import React from 'react'
import { hot } from 'react-hot-loader'
import IssueElt from './IssueElt'
import { connect } from 'react-redux';

class IssueList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.issueList.length != 0)
        {
            if (this.props.issueList.results.length != 0)
            {
                return (
                    this.props.issueList.results.slice(0, 20).map(function (item, i) {
                        return (
                            <div>
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
                        No result found.
                    </div>
                )
            }
        }
        return (
        <div className="container">
            <center>Loading...</center>
        </div>
        )
    }
}

export default hot(module)(connect()(IssueList))