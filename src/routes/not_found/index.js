import React, { useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'

import { getRouteChangeEffect } from '../../utils'
import { AppAction } from '../../redux'
import { connect } from 'react-redux'

const NotFound = props => {
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <Paper className='not-found' />
      </Grid>
    </Grid>
  )
}
export default connect(null, { onRouteChange: AppAction.onRouteChange })(NotFound)
