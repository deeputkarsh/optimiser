import React from 'react'
import { Grid } from '@material-ui/core'

export default function ({ data, strategyName }) {
  return (
    <Grid container>
      <Grid container className='summary-header'>
        <Grid item xs={12}>{strategyName}</Grid>
      </Grid>
      <Grid container className='summary-header'>
        <Grid item xs={8}>Strategy Input</Grid>
        <Grid item xs={4}>Value</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Weeks Of Supply</Grid>
        <Grid item xs={4}>{data.WOS}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Step Discount</Grid>
        <Grid item xs={4}>{data.stepDisc}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Max Discount</Grid>
        <Grid item xs={4}>{data.maxDisc}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>Min Discount</Grid>
        <Grid item xs={4}>{data.minDisc}</Grid>
      </Grid>
    </Grid>
  )
}
