// IssueList.js
import React from 'react'
import { hot } from 'react-hot-loader'
import Photo from './Photo'
import { connect } from 'react-redux';
import { fetchPage } from '../actions/actions'

class IssueList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issueList: [],
            searchtag: 'spiderman'
        }
    }

    componentWillReceiveProps(nextProps) {
        
        console.log(nextProps)
        this.setState({
            searchtag: nextProps.searchtag
        })
        
    }

    componentDidMount() {
        //this.props.dispatch(fetchPage(0, 20))
        var urljson = '';
        console.log(this.state.searchtag);
        urljson = 'http://localhost:4242/issues/' + this.state.searchtag;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                console.log(obj)
                this.setState({issueList : obj});
            })
    }

    render() {
        if (this.state.issueList.length != 0)
        {
            return (
                this.state.issueList.results.map(function (item, i) {
                    console.log(item);
                    return (
                        <div>
                            <Photo key={i} name={item.name} issueNb={item.issue_number} site ={item.site_detail_url} date ={item.cover_date} volume = {item.volume.name} image ={item.image.thumb_url}/>
                            <hr/>
                        </div>
                    )
                })
            )
        }
        return (<div>Loading...</div>)
    }
}

function mapStateToProps(state) {
    return {
        search_tag: state.search_tag
        //grid: state.display.grid
    }
}

export default hot(module)(connect(mapStateToProps)(IssueList))