/*
 * action types
 */

export const LOGGED_IN = 'LOGGED_IN'
export const ISSUE_GET = 'ISSUE_GET'

/*
 * action creators
 */

function loggedIn() {
    return {
        type: LOGGED_IN
    }
}

function issueGet(obj) {
    return {
        type: ISSUE_GET,
        issue: obj
    }
}

export function login() {
    return (dispatch) => {
        dispatch(loggedIn())
    }
}

export function getIssue(id) {
    return (dispatch) => {
        var urljson = 'http://localhost:4242/issue/' + id;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(issueGet(obj))
            })
    }
}