import React from 'react'
import { Grid, Paper } from '@material-ui/core'
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
  const labels = summaryList.map(summary => summary.strategyName)
  return {
    labels,
    datasets: [
      {
        label: chartItem.label,
        backgroundColor: chartItem.backgroundColor || 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: summaryList.map(summary => summary.forecastResults[chartItem.key])
      }
    ]
  }
}

const StrategyVisualization = props => {
  const { summaryList } = props
  return (
    <div>
      <h2>Strategy Visual Comparisions</h2>
      <Grid container spacing={2}>
        {chartList.map(item => (
          <Grid key={item.key} item xs={4}>
            <Paper>
              <Bar
                data={getChartDataSet(summaryList, item)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default StrategyVisualization
