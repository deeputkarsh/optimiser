import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { strategySummaryRollUpAction, AppAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
// import StrategyInput from './strategy_input'
// import ForcastResults from './forcast_results'
import SkuLevelStrategySummary from './sku_level_strategy_summary'
import ClassLevelStrategySummary from './class_level_strategy_summary'

const RenderSummaryItem = ({ strategyRollUpSummaryList }) => {
  return strategyRollUpSummaryList.map((item, index) => {
    return (
      <Grid key={index} item xs={12}>
        <Paper className='summary-item'>
          <ClassLevelStrategySummary data={item.classLevelSummary} />
          <SkuLevelStrategySummary data={item.skuLevelSummary} />
        </Paper>
      </Grid>
    )
  })
}
const StrategyRollUpSummary = props => {
  const { strategyRollUpSummaryList, isLoggedIn, history, getSkuLevelSummary, onRouteChange } = props
  useEffect(getLogoutEffect(history, isLoggedIn), [isLoggedIn])
  useEffect(() => { isLoggedIn && getSkuLevelSummary() }, [isLoggedIn, getSkuLevelSummary])
  useEffect(getRouteChangeEffect(history, onRouteChange))
  return (
    <div className='summary-container'>
      <Grid container>
        <Paper className='summary-details'>
          <Grid item xs={12} className='page-helper-text roll-up-strategy'>Strategy Roll Up</Grid>
        </Paper>
      </Grid>
      <Grid container spacing={2} wrap='wrap'>
        <RenderSummaryItem strategyRollUpSummaryList={strategyRollUpSummaryList} />
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ strategyRollUpSummaryList, appStore: { isLoggedIn } }) => ({ strategyRollUpSummaryList, isLoggedIn })

export default connect(mapStateToProps, { ...strategySummaryRollUpAction, onRouteChange: AppAction.onRouteChange })(StrategyRollUpSummary)
