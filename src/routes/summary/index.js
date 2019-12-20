import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core'
import { summaryAction, AppAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
import StrategyInput from './strategy_input'
import ForcastResults from './forcast_results'

const RenderSummaryItem = ({ summaryList }) => {
  return summaryList.map((item, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} lg={4}>
        <Paper className='summary-item'>
          <StrategyInput data={item.strategyInput} />
          <ForcastResults data={item.forecastResults} />
          <span className='input-group-btn'>
            <Link to='/strategy_roll_up'>See more detail</Link>
          </span>
        </Paper>
      </Grid>
    )
  })
}
const Summary = props => {
  const { summaryList, isLoggedIn, history, getSummary, onRouteChange } = props
  useEffect(getLogoutEffect(history, isLoggedIn), [isLoggedIn])
  useEffect(() => { isLoggedIn && getSummary() }, [isLoggedIn, getSummary])
  useEffect(getRouteChangeEffect(history, onRouteChange))
  return (
    <div className='summary-container'>
      <Grid container spacing={2} wrap='wrap'>
        <RenderSummaryItem summaryList={summaryList} />
        <Grid item xs={12} sm={6} lg={4}>
          <Link to='/create_strategy' className='menu-link'>
            <Paper className='summary-item add-summary'>
            Add Another Strategy
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ summaryList, appStore: { isLoggedIn } }) => ({ summaryList, isLoggedIn })

export default connect(mapStateToProps, { ...summaryAction, onRouteChange: AppAction.onRouteChange })(Summary)
