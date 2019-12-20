import { createActions, handleActions, combineActions } from 'redux-actions'
import { SnackbarAction } from './snackbarActions'
import { optimiserAPI } from '../services'
import { AppAction } from './appActions'

const defaultState = { username: '', password: '' }
const login = ({ username, password }) => dispatch => {
  const cred = window.btoa(`${username}:${password}`)
  dispatch(fetchLogin(cred)).then(({ payload }) => {
    dispatch(AppAction.onLogin(payload.token))
    dispatch(SnackbarAction.show(payload.message))
    dispatch(onInputChange(defaultState))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const logout = _ => dispatch => {
  dispatch(fetchLogout()).then(({ payload }) => {
    dispatch(AppAction.onLogout())
    dispatch(SnackbarAction.show(payload.message))
    dispatch(onInputChange(defaultState))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const { fetchLogin, fetchLogout, onInputChange } = createActions({
  FETCH_LOGOUT: async _ => {
    const response = await optimiserAPI.logout()
    return response.data
  },
  FETCH_LOGIN: async (form) => {
    const response = await optimiserAPI.login(form)
    return response.data// 'Logged in successfully!!'
  }
}, 'ON_INPUT_CHANGE', { prefix: 'LOGIN' })
export const LoginAction = { login, logout, onInputChange }

export default handleActions({ [combineActions(onInputChange)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
