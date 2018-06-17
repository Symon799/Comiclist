import { combineReducers } from 'redux'
import {
    LOGGED_IN, ISSUE_GET, USER_GET
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

function user(state = {}, action) {
    switch (action.type) {
        case USER_GET:
            return {
                user: action.user
            }

        default:
            return state
    }
}

const app = combineReducers({
    log,
    issue,
    user
})

export default app