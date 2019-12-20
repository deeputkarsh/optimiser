import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

import appStore from './appActions'
import snackbarStore from './snackbarActions'
import loginStore from './loginActions'
import strategyData from './strategyActions'
import summaryList from './summaryActions'
import strategyRollUpSummaryList from './strategyRollUpActions'

const rootReducer = combineReducers({
  appStore,
  loginStore,
  strategyData,
  summaryList,
  strategyRollUpSummaryList,
  snackbarStore
})

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk,
  createLogger()
)(createStore)

export function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store
}
