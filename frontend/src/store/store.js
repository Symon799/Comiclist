import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
    app,
    {
        log: false,
        issue: {},
        user: {}
    },
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store