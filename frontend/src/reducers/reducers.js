import { combineReducers } from 'redux'
import {
    LOGGED_IN, ISSUE_GET, USER_GET, REGISTERED, SEARCH
} from '../actions/actions'

function log(state = {}, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {
                logged: action.id
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

function search(state = {}, action) {
    switch (action.type) {
        case SEARCH:
            return {
                result: action.result
            }

        default:
            return state
    }
}

const app = combineReducers({
    log,
    issue,
    user,
    search
})

export default app