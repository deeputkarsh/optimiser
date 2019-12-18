import { createActions, handleActions, combineActions } from 'redux-actions'
import { Auth } from '../utils'

const defaultState = { route: '', isLoggedIn: Auth.isLoggedIn() }

const { onLogin, onLogout, onRouteChange } = createActions({
  ON_ROUTE_CHANGE: route => { return { route: route } },
  ON_LOGIN: token => { Auth.register(token); return {} },
  ON_LOGOUT: _ => { Auth.deregister(); return {} }
}, { prefix: 'APP' })
export const AppAction = { onLogin, onLogout, onRouteChange }

export default handleActions({ [combineActions(onLogin, onLogout, onRouteChange)]: (state, { payload }) => ({ ...state, ...payload, isLoggedIn: Auth.isLoggedIn() }) }, defaultState)
