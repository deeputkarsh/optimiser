import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button } from '@material-ui/core'

import { CreateStrategyAction, AppAction, SnackbarAction } from '../../redux'

import { getRouteChangeEffect } from '../../utils'

const createEditStrategy = (props) => {
  useEffect(() => { isLoggedIn && props.history.push('/dashboard') })
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  const { strategyName, strategyClass, isLoggedIn } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onSaveClick = (event) => {
    if (strategyName.length <= 0 || strategyClass.length <= 0) {
      return props.showError('Enter valid mobile & password')
    }
    props.update({ strategyName, strategyClass })
  }

  return (
    <div className='create-strategy'>
      <div className='{styles.loginContent}'>
        <form className='{styles.loginForm}'>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='strategy name'
              label='Name'
              variant='outlined'
              type='text'
              placeholder='Create a name'
              className='{styles.loginInput}'
              required
              value={strategyName}
              onChange={e => onInputChange(e, 'strategyName')}
            />
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='class'
              label='Class'
              variant='outlined'
              type='number'
              placeholder='Select a class'
              className='{styles.loginInput}'
              required
              value={strategyClass}
              onChange={e => onInputChange(e, 'strategyClass')}
            />
          </FormControl>
        </form>
        <Button color='primary' size='large' variant='contained' className='{styles.loginArrow}' onClick={onSaveClick}> Save </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ strategyData, appStore: { isLoggedIn } }) => ({ ...strategyData, isLoggedIn })

const { update, getStrategy, onInputChange } = CreateStrategyAction
const mapdispatchtoprops = {
  update,
  getStrategy,
  onInputChange,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(createEditStrategy)
