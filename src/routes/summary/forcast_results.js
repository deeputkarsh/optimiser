import React from 'react'
import { Grid } from '@material-ui/core'

export default function ({ data }) {
  return (
    <Grid container justify='center' spacing={3}>
      <Grid container xs={12}>
        <Grid item xs={6}>Weeks Of Supply</Grid>
        <Grid item xs={6}>{data.WOS}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Erosion $</Grid>
        <Grid item xs={6}>{data.erosion}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>EOH $</Grid>
        <Grid item xs={6}>{data.EOH}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>EOH Units</Grid>
        <Grid item xs={6}>{data.EOHUnits}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Avg OB %</Grid>
        <Grid item xs={6}>{data.avgOBDisc}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Sales Units</Grid>
        <Grid item xs={6}>{data.salesUnits}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>COGS</Grid>
        <Grid item xs={6}>{data.COGS}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Recovery Rate</Grid>
        <Grid item xs={6}>{data.recoveryRate}</Grid>
      </Grid>
    </Grid>
  )
}
