import React from 'react'
import { Grid } from '@material-ui/core'

export default function ({ data }) {
  return (
    <Grid container>
      <Grid container className='summary-header'>
        <Grid item xs={8}>Forcasted Results</Grid>
        <Grid item xs={4}>Value</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Weeks Of Supply</Grid>
        <Grid item xs={4}>{data.WOS}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Erosion $</Grid>
        <Grid item xs={4}>{data.erosion}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>EOH $</Grid>
        <Grid item xs={4}>{data.EOH}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>EOH Units</Grid>
        <Grid item xs={4}>{data.EOHUnits}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Avg OB %</Grid>
        <Grid item xs={4}>{data.avgOBDisc}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Sales Units</Grid>
        <Grid item xs={4}>{data.salesUnits}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>COGS</Grid>
        <Grid item xs={4}>{data.COGS}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Recovery Rate</Grid>
        <Grid item xs={4}>{data.recoveryRate}</Grid>
      </Grid>
    </Grid>
  )
}
