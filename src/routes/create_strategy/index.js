import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button, InputLabel, Select, MenuItem } from '@material-ui/core'

import { CreateStrategyAction, AppAction, SnackbarAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
import Constraints from './constraints'

const CreateEditStrategy = (props) => {
  const { strategyName, strategyClass, strategyWOS, strategyConstraints, isLoggedIn } = props
  useEffect(getLogoutEffect(props.history, props.isLoggedIn), [isLoggedIn])
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onSaveClick = (event) => {
    if (strategyName.length <= 0 || strategyClass.length <= 0) {
      return props.showError('Enter valid mobile & password')
    }
    props.update({ strategyName, strategyClass, strategyWOS })
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
          <FormControl variant='outlined' className='' style={{ width: '100%' }}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Class
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={strategyClass}
              onChange={e => onInputChange(e, 'strategyClass')}
              labelWidth={24}
            >
              <MenuItem value={140}>140</MenuItem>
              <MenuItem value={20}>10</MenuItem>
              <MenuItem value={30}>11</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='strategy name'
              label='Class Weeks Of Supply'
              variant='outlined'
              type='text'
              placeholder='Weeks Of Supply'
              className='{styles.loginInput}'
              required
              value={strategyWOS}
              onChange={e => onInputChange(e, 'strategyWOS')}
            />
          </FormControl>
          <Constraints
            strategyConstraints={strategyConstraints}
            onInputChange={props.onInputChange}
            addConstraint={props.addConstraint}
          />
        </form>
        <Button color='primary' size='large' variant='contained' className='{styles.loginArrow}' onClick={onSaveClick}> Save </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ strategyData, appStore: { isLoggedIn } }) => ({ ...strategyData, isLoggedIn })

const mapdispatchtoprops = {
  ...CreateStrategyAction,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(CreateEditStrategy)
