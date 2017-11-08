import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import reducers from './model/reducers'
import rootEpic from './model/epics'
import actions from './model/epics/actions'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import 'rxjs'

import './index.css'
import App from './components/App/'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const epicMiddleware = createEpicMiddleware(rootEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(routeMiddleware, epicMiddleware))
)

ReactDOM.render(
  <Provider store={ store } key="provider">
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
store.dispatch(actions.getCakes())
