import { combineReducers } from 'redux'
import {
    LOGGED_IN, ISSUE_GET
} from '../actions/actions'

function log(state = {}, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {
                logged: true
            }

        default:
            return state
    }
}

function issue(state = {}, action) {
    switch (action.type) {
        case ISSUE_GET:
            return {
                issue: action.issue
            }

        default:
            return state
    }
}

const app = combineReducers({
    log,
    issue
})

export default app