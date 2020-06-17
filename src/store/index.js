import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import rootReducer from '../rootReducer'
import { rootEpic } from '../epics'

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

const initialState = {}
const enhancers = []
const middleware = [epicMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
)

epicMiddleware.run(rootEpic);