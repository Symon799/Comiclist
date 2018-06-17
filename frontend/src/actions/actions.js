/*
 * action types
 */

export const LOGGED_IN = 'LOGGED_IN'
export const ISSUE_GET = 'ISSUE_GET'
export const USER_GET = 'USER_GET'
export const USERS_GET = 'USERS_GET'
export const REGISTERED = 'REGISTERED'
export const SEARCH = 'SEARCH'
export const LAST_ISSUES = 'LAST_ISSUES'

/*
 * action creators
 */

function loggedIn(obj) {
    return {
        type: LOGGED_IN,
        id: obj
    }
}

function registered(obj) {
    return {
        type: REGISTERED,
        error: obj
    }
}

function issueGet(obj) {
    return {
        type: ISSUE_GET,
        issue: obj
    }
}

function userGet(obj) {
    return {
        type: USER_GET,
        user: obj
    }
}

function usersGet(obj) {
    return {
        type: USERS_GET,
        users: obj
    }
}

function searchResult(res) {
    return {
        type: SEARCH,
        result: res
    }
}

function last(res) {
    return {
        type: LAST_ISSUES,
        result: res
    }
}

export function login(user) {
    return (dispatch) => {
        fetch('http://localhost:4242/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(obj => {
            if (obj && obj._id) {
                dispatch(loggedIn(obj._id))
            }
        })
    }
}

export function getIssue(id) {
    return (dispatch) => {
        let urljson = 'http://localhost:4242/issue/' + id;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(issueGet(obj))
            })
    }
}

export function getUser(id) {
    return (dispatch) => {
        let urljson = 'http://localhost:4242/users/' + id;
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(userGet(obj))
            })
    }
}

export function getUsers() {
    return (dispatch) => {
        let urljson = 'http://localhost:4242/users';
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(usersGet(obj))
            })
    }
}

export function register(user) {
    return (dispatch) => {
        fetch('http://localhost:4242/users')
        .then((response) => response.json())
        .then(obj => {
            let success = true
            
            obj.forEach(element => {
                if (element.email === user.email || element.username === user.username) {
                    dispatch(registered('error'))
                    success = false
                }
            })

            if (success) {
                fetch('http://localhost:4242/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                }).then(response => response.json())
                .then(dispatch(registered('success')))
            }
        })
    }
}

export function search(tags) {
    return (dispatch) => {
        let urljson = 'http://localhost:4242/issues/' + tags
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(searchResult(obj))
            })
    }
}

export function lastissues() {
    return (dispatch) => {
        let urljson = 'http://localhost:4242/lastissues';
        fetch(urljson, {timeout: 5000})
            .then((response) => response.json())
            .then(obj => {
                dispatch(last(obj))
            })
    }
}