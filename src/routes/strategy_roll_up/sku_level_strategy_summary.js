import React from 'react'
import { Grid } from '@material-ui/core'

export default function ({ data }) {
  return (
    <Grid container>
      <Grid container className='roll-up-header'>
        <Grid item xs={2}>SKU</Grid>
        <Grid item xs={3}>SKU Description</Grid>
        <Grid item xs={1}>Avg OB %</Grid>
        <Grid item xs={1}>Erosion $</Grid>
        <Grid item xs={1}>WOS</Grid>
        <Grid item xs={1}>EOH Units</Grid>
        <Grid item xs={1}>Sales Units</Grid>
        <Grid item xs={1}>COGS</Grid>
        <Grid item xs={1}>Recovery Rate</Grid>
      </Grid>
      {data.map((item, index) => (
        <Grid key={index} container>
          <Grid item xs={2}>{item.SKU}</Grid>
          <Grid item xs={3}>{item.SKUDesc}</Grid>
          <Grid item xs={1}>{item.avgOBDisc}</Grid>
          <Grid item xs={1}>{item.erosion}</Grid>
          <Grid item xs={1}>{item.WOS}</Grid>
          <Grid item xs={1}>{item.EOHUnits}</Grid>
          <Grid item xs={1}>{item.salesUnits}</Grid>
          <Grid item xs={1}>{item.COGS}</Grid>
          <Grid item xs={1}>{item.recoveryRate}</Grid>
        </Grid>
      ))}
    </Grid>
  )
}
