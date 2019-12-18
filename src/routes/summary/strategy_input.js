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
        <Grid item xs={6}>Max Step</Grid>
        <Grid item xs={6}>{data.maxStep}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Min Step</Grid>
        <Grid item xs={6}>{data.minStep}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Max Discount</Grid>
        <Grid item xs={6}>{data.minDisc}</Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>Min Discount</Grid>
        <Grid item xs={6}>{data.minDisc}</Grid>
      </Grid>
    </Grid>
  )
}
