import { createActions, handleActions, combineActions } from 'redux-actions'
import { optimiserAPI } from '../services'

const defaultState = []

const { getSummary } = createActions({
  GET_SUMMARY: async _ => {
    const response = await optimiserAPI.getSummaryList()
    return response.data
  }
}, { prefix: 'SUMMARY' })
export const summaryAction = { getSummary }

export default handleActions({ [combineActions(getSummary)]: (state, { payload }) => payload }, defaultState)
