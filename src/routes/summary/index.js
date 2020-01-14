import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core'
import { summaryAction } from '../../redux'
import { getLogoutEffect } from '../../utils'
import StrategyInput from './strategy_input'
import ForcastResults from './forcast_results'
import StrategyVisualization from '../strategy_visualization'

const RenderSummaryItem = ({ summaryList }) => {
  return summaryList.map((item, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} lg={4}>
        <Paper className='summary-item'>
          <StrategyInput strategyName={item.strategyName} data={item.strategyInput} />
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
  const { summaryList, isLoggedIn, history, getSummary } = props
  useEffect(getLogoutEffect(history, isLoggedIn), [isLoggedIn])
  useEffect(() => { isLoggedIn && getSummary() }, [isLoggedIn, getSummary])
  return (
    <div className='summary-container'>
      <Grid container>
        <Paper className='summary-details'>
          <Grid item xs={12} className='page-helper-text'>Optimisation Summary</Grid>
          <Grid item xs={3}><strong>Name :</strong> TV's - 4k- Holiday</Grid>
          <Grid item xs={3}><strong>Class :</strong> 140 - className</Grid>
        </Paper>
      </Grid>
      <Grid container spacing={2} wrap='wrap'>
        <RenderSummaryItem summaryList={summaryList} />
        <Grid item xs={12} sm={6} lg={4}>
          <Link to='/create_strategy' className='add-summary-container'>
            <Paper className='summary-item add-summary'>
              <div>Add Another</div><div>Strategy</div>
            </Paper>
          </Link>
        </Grid>
      </Grid>
      <StrategyVisualization summaryList={summaryList} />
    </div>
  )
}

const mapStateToProps = ({ summaryList, appStore: { isLoggedIn } }) => ({ summaryList, isLoggedIn })

export default connect(mapStateToProps, { ...summaryAction })(Summary)
