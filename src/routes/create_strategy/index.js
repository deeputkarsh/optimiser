import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Paper, TextField, FormControl, Button, InputLabel, Select, MenuItem, Grid } from '@material-ui/core'
import { CreateStrategyAction, AppAction, SnackbarAction } from '../../redux'
import { getRouteChangeEffect, getLogoutEffect } from '../../utils'
import Constraints from './constraints'
import StrategyCheckbox from './strategy_checkbox'

const CreateEditStrategy = (props) => {
  const { strategyName, strategyClass, strategyWOS, strategyConstraints, minimizeErosion, clearInventory, clearOldAgeProductFirst, isLoggedIn } = props
  useEffect(getLogoutEffect(props.history, isLoggedIn), [isLoggedIn])
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onSaveClick = (event) => {
    if (strategyName.length <= 0 || strategyClass.length <= 0) {
      return props.showError('Enter valid strategyName & strategyClass')
    }
    props.update({ strategyName, strategyClass, strategyWOS, strategyConstraints, minimizeErosion, clearInventory, clearOldAgeProductFirst })
    props.history.push('/summary')
  }

  return (
    <Paper className='create-strategy'>
      <Grid item xs={12} className='page-helper-text'>Create a Strategy</Grid>
      <form className='strategy-form'>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' className='form-control'>
            <InputLabel id='strategy-class-select-label'> Class </InputLabel>
            <Select
              labelId='strategy-class-select-label'
              id='strategy-class-select'
              labelWidth={37}
              value={strategyClass}
              onChange={e => onInputChange(e, 'strategyClass')}
            >
              <MenuItem value={140}>140</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <StrategyCheckbox
          minimizeErosion={minimizeErosion}
          clearInventory={clearInventory}
          clearOldAgeProductFirst={clearOldAgeProductFirst}
          onInputChange={props.onInputChange}
        />
        <Grid item xs={6}>
          <FormControl className='form-control'>
            <TextField
              name='strategy name'
              label='Class Weeks Of Supply'
              variant='outlined'
              // type='text'
              placeholder='Weeks Of Supply'
              type='number'
              required
              value={strategyWOS}
              onChange={e => onInputChange(e, 'strategyWOS')}
            />
          </FormControl>
        </Grid>
        <Constraints
          strategyConstraints={strategyConstraints}
          onInputChange={props.onInputChange}
        />
      </form>
      <Button color='primary' size='large' variant='contained' onClick={onSaveClick}> Submit </Button>
    </Paper>
  )
}

const mapStateToProps = ({ strategyData, appStore: { isLoggedIn } }) => ({ ...strategyData, isLoggedIn })

const mapdispatchtoprops = {
  ...CreateStrategyAction,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(CreateEditStrategy)
