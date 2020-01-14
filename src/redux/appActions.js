import { createActions, handleActions, combineActions } from 'redux-actions'
import { Auth } from '../utils'

const defaultState = { isLoggedIn: Auth.isLoggedIn() }

const { onLogin, onLogout } = createActions({
  ON_LOGIN: token => { Auth.register(token); return {} },
  ON_LOGOUT: _ => { Auth.deregister(); return { } }
}, { prefix: 'APP' })
export const AppAction = { onLogin, onLogout }

export default handleActions({ [combineActions(onLogin, onLogout)]: (state, { payload }) => ({ ...state, ...payload, isLoggedIn: Auth.isLoggedIn() }) }, defaultState)
