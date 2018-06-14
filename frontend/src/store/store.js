import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
    app,
    {
        display: {
            searchTag: "batman",
            issueList: []
        }
    },
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store