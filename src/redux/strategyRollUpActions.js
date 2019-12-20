import { createActions, handleActions, combineActions } from 'redux-actions'
import { optimiserAPI } from '../services'

const defaultState = []

const { getSkuLevelSummary } = createActions({
  GET_SKU_LEVEL_SUMMARY: async _ => {
    const response = await optimiserAPI.getStrategyRollUpSummary()
    return response.data
  }
}, { prefix: 'ROLLUP' })
export const strategySummaryRollUpAction = { getSkuLevelSummary }

export default handleActions({ [combineActions(getSkuLevelSummary)]: (state, { payload }) => payload }, defaultState)
