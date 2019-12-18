import React, { useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'

import styles from '../../styles/index.scss'
import { getRouteChangeEffect } from '../../utils'

export default props => {
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.notFound}>404 NOT FOUND</Paper>
      </Grid>
    </Grid>
  )
}
