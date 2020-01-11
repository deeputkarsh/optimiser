import React, { useEffect } from 'react'
import { connect } from 'react-redux'
/* import { Link } from 'react-router-dom' */
/* import { Grid, Paper } from '@material-ui/core' */
import { summaryAction, AppAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
import { Bar } from 'react-chartjs-2'

const chartList = [
  { key: 'WOS', label: 'Weeks Of Supply' },
  { key: 'erosion', label: 'Erosion' },
  { key: 'EOH', label: 'Ending On Hand Dollars' },
  { key: 'EOHUnits', label: 'Ending On Hand Units' },
  { key: 'avgOBDisc', label: 'Average OB Discount' },
  { key: 'salesUnits', label: 'Sales Units' },
  { key: 'COGS', label: 'Cost Of Goods Sold' },
  { key: 'recoveryRate', label: 'Recovery Rate' }
]

const getChartDataSet = (summaryList, chartItem) => {
  return {
    labels: ['WOS'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
}

const StrategyVisualization = props => {
  const { summaryList } = props
  // useEffect(getLogoutEffect(history, isLoggedIn), [isLoggedIn])
  // useEffect(() => { isLoggedIn && getSummary() }, [isLoggedIn, getSummary])
  // useEffect(getRouteChangeEffect(history, onRouteChange))
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={getChartDataSet()}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

// const mapStateToProps = ({ summaryList, appStore: { isLoggedIn } }) => ({ summaryList, isLoggedIn })

// export default connect(mapStateToProps, { ...summaryAction, onRouteChange: AppAction.onRouteChange })(StrategyVisualization)

export default StrategyVisualization
