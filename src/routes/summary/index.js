import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { summaryAction, AppAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
import StrategyInput from './strategy_input'
import ForcastResults from './forcast_results'

const RenderSummaryItem = ({ summaryList }) => {
  return summaryList.map((item, index) => {
    return (
      <Paper key={index}>
        <StrategyInput data={item.strategyInput} />
        <ForcastResults data={item.forecastResults} />
      </Paper>
    )
  })
}
const Summary = props => {
  const { summaryList, isLoggedIn } = props
  useEffect(getLogoutEffect(props.history, props.isLoggedIn), [isLoggedIn])
  useEffect(() => { isLoggedIn && props.getSummary() }, ['isLoggedIn'])
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <RenderSummaryItem summaryList={summaryList} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({ summaryList, appStore: { isLoggedIn } }) => ({ summaryList, isLoggedIn })

export default connect(mapStateToProps, { ...summaryAction, onRouteChange: AppAction.onRouteChange })(Summary)
