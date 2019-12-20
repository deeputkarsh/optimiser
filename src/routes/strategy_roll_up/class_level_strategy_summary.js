import React from 'react'
import { Grid } from '@material-ui/core'

export default function ({ data }) {
  return (

    <Grid container>
      <Grid container className='summary-header'>
        <Grid item xs={12}>TV's - 4k- Holiday</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>Class</Grid>
        <Grid item xs={3}>Class Description</Grid>
        <Grid item xs={1}>Avg OB %</Grid>
        <Grid item xs={1}>Erosion $</Grid>
        <Grid item xs={1}>WOS</Grid>
        <Grid item xs={1}>EOH Units</Grid>
        <Grid item xs={1}>Sales Units</Grid>
        <Grid item xs={1}>COGS</Grid>
        <Grid item xs={1}>Recovery Rate</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>{data.className}</Grid>
        <Grid item xs={3}>{data.classDesc}</Grid>
        <Grid item xs={1}>{data.avgOBDisc}</Grid>
        <Grid item xs={1}>{data.erosion}</Grid>
        <Grid item xs={1}>{data.WOS}</Grid>
        <Grid item xs={1}>{data.EOHUnits}</Grid>
        <Grid item xs={1}>{data.salesUnits}</Grid>
        <Grid item xs={1}>{data.COGS}</Grid>
        <Grid item xs={1}>{data.recoveryRate}</Grid>
      </Grid>
    </Grid>

  )
}
