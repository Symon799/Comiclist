// IssueElt.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { remove } from '../actions/actions';

class IssueElt extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
       //console.log(this.props);
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <a href="#">
                            <img class="img-fluid rounded mb-3 mb-md-0" src={this.props.image} alt="" width="104" height="160" />
                        </a>
                    </div>
                    <div class="col-md-8">
                        <h4>{this.props.volume} #{this.props.issueNb} - {this.props.name}</h4>
                        <h6><span class="badge badge-secondary">{this.props.date}</span></h6>
                    </div>
                    <div class="col-md-1">
                        <a class="btn btn-primary" href={this.props.site}> + Add to my list</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(connect()(IssueElt))