// Form.js
import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { add } from '../actions/actions'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log('click ' + this.state.url)
        this.props.dispatch(add(this.state.url))
    }

    onChange(item) {
        console.log('change ' + item.target.value)
        this.setState({
            url: item.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Picture url" onChange={this.onChange}/>
                <button onClick={this.onClick}>Ajouter</button>
            </div>
        )
    }
}

export default hot(module)(connect()(Form))