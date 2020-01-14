import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const NotFound = props => {
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <Paper className='not-found' />
      </Grid>
    </Grid>
  )
}
export default NotFound
