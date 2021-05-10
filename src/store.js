import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import app from './reducer/index'

const browserHistory = createHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  if (typeof window.devToolsExtension === 'function') {
    enhancers.push(window.devToolsExtension())
  }
}

export const history = browserHistory
export const store = createStore(
  combineReducers({ router: routerReducer, ...app }),
  compose(applyMiddleware(...middleware), ...enhancers),
)
