// IssueElt.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class IssueElt extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
       //console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a href={"/issue/" + this.props.id}>
                            <img className="img-fluid rounded mb-3 mb-md-0" src={this.props.image} alt="" width="104" height="160" />
                        </a>
                    </div>
                    <div className="col-md-8">
                        <a href={"/issue/" + this.props.id}>
                            <h4>{this.props.volume} #{this.props.issueNb} - {this.props.name}</h4>
                            <h6><span className="badge badge-secondary">{this.props.date}</span></h6>
                        </a>
                    </div>
                    <div className="col-md-1">
                        <a className="btn btn-primary" href={this.props.site}> + Add to my list</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(connect()(IssueElt))