// LastIssuesLine.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class LastIssuesLine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: []
        }
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))
        var urljson = 'http://localhost:4242/lastissues';
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                this.setState({issueList : obj});
        })
    }

   render() {
        if (this.state.issueList.length != 0)
        {
            return (
                this.state.issueList.results.slice(0, 6).map(function (item, i) {
                    return (
                        <div className="col-md-2">
                            <a href={"/issue/" + item.id}>
                                <img className="img rounded mb-3 mb-md-0" src={item.image.medium_url} alt="" width="170" height="230"/>
                            </a>
                            <center><h5>{item.volume.name.slice(0, 16)}</h5></center>
                        </div>
                    )
                })
            )
        }
        else
        {
            return (
                <div className="container">
                   <center>Loading...</center>
                </div>
            )
        }      
    }
}

export default hot(module)(connect()(LastIssuesLine))