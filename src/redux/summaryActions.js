import { createActions, handleActions, combineActions } from 'redux-actions'
import { SnackbarAction } from './snackbarActions'
import { optimiserAPI } from '../services'

const defaultState = []

const getSummary = data => dispatch => {
  dispatch(fetchSummary(data)).then(({ payload }) => {
    dispatch(SnackbarAction.show(payload))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const { fetchSummary } = createActions({
  FETCH_SUMMARY: async _ => {
    const response = await optimiserAPI.getSummaryList()
    console.log(response)
    return response.data
  }
}, { prefix: 'SUMMARY' })
export const summaryAction = { getSummary }

export default handleActions({ [combineActions(getSummary)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
