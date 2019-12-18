import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { summaryAction } from '../../redux'
// import styles from '../../styles/index.scss'
import { getRouteChangeEffect } from '../../utils'
import StrategyInput from './strategy_input'
import ForcastResults from './forcast_results'

const summaryList = [{
  strategyInput: {
    WOS: 8,
    maxStep: 5,
    maxDisc: 50,
    minStep: 5,
    minDisc: 5
  },
  forecastResults: {
    WOS: 5,
    erosion: 751549.67,
    EOH: 27300769,
    EOHUnits: 3,
    avgOBDisc: 10,
    salesUnits: 4,
    COGS: 200,
    recoveryRate: 200
  }
}]
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
const summary = props => {
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  const { summaryList } = props
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <RenderSummaryItem summaryList={summaryList} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({ appStore: { isLoggedIn } }) => ({ summaryList, isLoggedIn })

const mapdispatchtoprops = {
  getSummary: summaryAction.getSummary
}
export default connect(mapStateToProps, mapdispatchtoprops)(summary)
