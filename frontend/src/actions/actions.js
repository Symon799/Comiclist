/*
 * action types
 */

export const LOGGED_IN = 'LOGGED_IN'

/*
 * action creators
 */

function loggedIn() {
    return {
        type: LOGGED_IN
    }
}

export function login() {
    return (dispatch) => {
        dispatch(loggedIn())
    }
}