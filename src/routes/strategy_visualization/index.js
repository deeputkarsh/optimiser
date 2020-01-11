import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { Bar } from 'react-chartjs-2'

const chartList = [
  { key: 'WOS', label: 'Weeks Of Supply', primaryColor: a => `rgba(255,99,132,${a})` },
  { key: 'erosion', label: 'Erosion', primaryColor: a => `rgba(255,132,99,${a})` },
  { key: 'EOH', label: 'Ending On Hand Dollars', primaryColor: a => `rgba(132,255,99,${a})` },
  { key: 'EOHUnits', label: 'Ending On Hand Units', primaryColor: a => `rgba(132,99,255,${a})` },
  { key: 'avgOBDisc', label: 'Average OB Discount', primaryColor: a => `rgba(99,255,132,${a})` },
  { key: 'salesUnits', label: 'Sales Units', primaryColor: a => `rgba(99,132,255,${a})` },
  { key: 'COGS', label: 'Cost Of Goods Sold', primaryColor: a => `rgba(255,190,25,${a})` },
  { key: 'recoveryRate', label: 'Recovery Rate', primaryColor: a => `rgba(255,25,190,${a})` }
]

const getChartDataSet = (summaryList, chartItem) => {
  const labels = summaryList.map(summary => summary.strategyName)
  return {
    labels,
    datasets: [
      {
        label: chartItem.label,
        borderWidth: 1,
        backgroundColor: chartItem.primaryColor('0.5'),
        borderColor: chartItem.primaryColor('1'),
        hoverBackgroundColor: chartItem.primaryColor('0.8'),
        hoverBorderColor: chartItem.primaryColor('1'),
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
          <Grid key={item.key} item xs={12} sm={6} lg={4}>
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
