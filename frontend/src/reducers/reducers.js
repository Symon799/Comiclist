import { combineReducers } from 'redux'
import {
    RECEIVE_PAGE
} from '../actions/actions'

function display(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PAGE:
            return {
                searchTag: state.searchTag,
                issueList: action.page
            }

        default:
            return state
    }
}

const app = combineReducers({
    display
})

export default app