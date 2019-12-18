import { createActions, handleActions, combineActions } from 'redux-actions'
import { SnackbarAction } from './snackbarActions'
import { optimiserAPI } from '../services'

const defaultState = { mobile: '', name: '', email: '' }

const update = data => dispatch => {
  dispatch(updateStrategy(data)).then(({ payload }) => {
    dispatch(SnackbarAction.show(payload))
    dispatch(onInputChange(defaultState))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const { updateStrategy, getStrategy, onInputChange } = createActions({
  UPDATE_STRATEGY: async (form) => {
    const response = await optimiserAPI.updateStrategy(form)
    console.log(response)
    return response.data.message // 'Update successful!!'
  },
  GET_STRATEGY: async (id) => {
    const response = await optimiserAPI.getStrategyData(id)
    return response.data
  }
}, 'ON_INPUT_CHANGE', { prefix: 'STRATEGY' })
export const CreateStrategyAction = { update, getStrategy, onInputChange }

export default handleActions({ [combineActions(onInputChange)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
