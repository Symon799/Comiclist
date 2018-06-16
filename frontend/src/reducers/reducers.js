import { combineReducers } from 'redux'
import {
    LOGGED_IN
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

const app = combineReducers({
    log
})

export default app