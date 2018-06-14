// Button.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/actions'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cursor: 0,
            amount: 0
        }
        this.onClick = this.onClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            cursor: nextProps.cursor,
            amount: nextProps.amount
        })
    }

    onClick() {
        this.props.dispatch(fetchPage(this.state.cursor, this.state.amount))
    }

    render() {
        return <button onClick={this.onClick}>NEW</button>
    }
}

function mapStateToProps(state) {
    return {
        cursor: state.display.cursor,
        amount: state.display.amount
    }
}

export default hot(module)(connect(mapStateToProps)(Button))