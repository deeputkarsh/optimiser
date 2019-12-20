import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { Snackbar } from '@material-ui/core'

import { SnackbarAction } from '../redux'
import { Header } from '../components'

import Login from './login'
import NotFound from './not_found'
import CreateStrategy from './create_strategy'
import Summary from './summary'
import StrategyRollUpSummary from './strategy_roll_up'

const App = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className='main-wrapper'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/404' component={NotFound} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/create_strategy' component={CreateStrategy} />
          <Route exact path='/summary' component={Summary} />
          <Route exact path='/strategy_roll_up' component={StrategyRollUpSummary} />
          <Redirect to='/404' />
        </Switch>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={props.snackbarStatus}
          key='topBottom'
          autoHideDuration={2000}
          onClose={props.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>{props.snackbarText}</span>}
        />
      </div>
    </BrowserRouter>
  )
}

function mapStateToProps ({ snackbarStore }) {
  return {
    snackbarStatus: snackbarStore.open || false,
    snackbarText: snackbarStore.data || ''
  }
}

export default connect(mapStateToProps, { handleSnackbarClose: SnackbarAction.hide })(App)
