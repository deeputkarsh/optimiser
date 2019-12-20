import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button, InputLabel, Select, MenuItem, Checkbox } from '@material-ui/core'
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
      return props.showError('Enter valid strategyName & strategyClass')
    }
    props.update({ strategyName, strategyClass, strategyWOS, strategyConstraints })
    props.history.push('/summary')
  }

  return (
    <div className='create-strategy'>
      <form className='strategy-form'>
        <FormControl className='form-control'>
          <TextField
            name='strategy name'
            label='Name'
            variant='outlined'
            type='text'
            placeholder='Create a name'
            required
            value={strategyName}
            onChange={e => onInputChange(e, 'strategyName')}
          />
        </FormControl>
        <FormControl variant='outlined' className='form-control'>
          <InputLabel id='strategy-class-select-label'> Class </InputLabel>
          <Select
            labelId='strategy-class-select-label'
            id='strategy-class-select'
            value={strategyClass}
            onChange={e => onInputChange(e, 'strategyClass')}
          >
            <MenuItem value={140}>140</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
          </Select>
        </FormControl>
        <InputLabel>Strategy : </InputLabel>
        <InputLabel>Minimise Errosion
          <Checkbox
            defaultChecked
            value='Minimise Errosion'
            color='primary'
            disabled
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </InputLabel>
        <InputLabel>Clear Inventory
          <Checkbox
            value='Clear Inventory'
            color='primary'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </InputLabel>
        <InputLabel>Clear Old Age Product First
          <Checkbox
            value='Clear Old Age Product First'
            color='primary'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </InputLabel>
        <FormControl className='form-control'>
          <TextField
            name='strategy name'
            label='Class Weeks Of Supply'
            variant='outlined'
            type='text'
            placeholder='Weeks Of Supply'
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
      <Button color='primary' size='large' variant='contained' onClick={onSaveClick}> Submit </Button>
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
