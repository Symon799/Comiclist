import { combineReducers } from 'redux'
import {
    LOGGED_IN, ISSUE_GET, USER_GET, USERS_GET, REGISTERED, SEARCH, LAST_ISSUES
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

function users(state = {}, action) {
    switch (action.type) {
        case USERS_GET:
            return {
                users: action.users
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

        case LAST_ISSUES:
            return {
                result: action.result
            }

        default:
            return state
    }
}

function registered(state = {}, action) {
    switch (action.type) {
        case REGISTERED:
            return {
                error: action.error
            }

        default:
            return state
    }
}

const app = combineReducers({
    log,
    issue,
    user,
    users,
    search,
    registered
})

export default app