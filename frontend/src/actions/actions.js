/*
 * action types
 */

export const REQUEST_PAGE = 'REQUEST_PAGE'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'
export const ADD_PHOTO = 'POST_URL'
export const REMOVED = 'REMOVED'

/*
 * action creators
 */

function requestPage() {
    return {
        type: REQUEST_PAGE
    }
}

function receivePage(json) {
    return {
        type: RECEIVE_PAGE,
        page: JSON.parse(json)
    }
}

function addPhoto() {
    return {
        type: ADD_PHOTO
    }
}

function removed() {
    return {
        type: REMOVED
    }
}

export function fetchPage(cursor, amount) {
    return (dispatch) => {
        dispatch(requestPage())
        fetch('http://localhost:4242/api/pictures?cursor=' + cursor
        + '&amount=' + amount)
            .then(response => response.json())
            .then(obj => dispatch(receivePage(obj)))
    }
}

export function add(url) {
    return (dispatch) => {
        console.log('post')
        fetch('http://localhost:4242/api/pictures', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                picture: url
            })
        })
        .then(dispatch(addPhoto()))
    }
}

export function remove(id) {
    return (dispatch) => {
        console.log('remove')
        fetch('http://localhost:4242/api/pictures/' + id, {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            method: 'DELETE'
        })
        .then(function() {
            dispatch(removed())
            dispatch(fetchPage(0, 20))
        })
    }
}