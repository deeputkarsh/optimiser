import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button } from '@material-ui/core'

import { LoginAction, AppAction, SnackbarAction } from '../../redux'

import { getRouteChangeEffect } from '../../utils'

const Login = (props) => {
  useEffect(() => { isLoggedIn && props.history.push('/summary') })
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  const { mobile, password, isLoggedIn } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onLoginClick = (event) => {
    if (mobile.length <= 0 || password.length <= 0) {
      return props.showError('Enter valid mobile & password')
    }
    props.login({ mobile, password })
  }
  const onPasswordEnter = event => (event.keyCode === 13) && props.login({ mobile, password })

  return (
    <div className='login-content'>
      <form className='login-form'>
        <FormControl className='form-control'>
          <TextField
            name='mobile'
            label='Mobile'
            variant='outlined'
            type='text'
            placeholder='Mobile'
            className='login-input'
            required
            value={mobile}
            onChange={e => onInputChange(e, 'mobile')}
          />
        </FormControl>
        <FormControl className='form-control'>
          <TextField
            name='password'
            label='Password'
            variant='outlined'
            type='password'
            placeholder='Password'
            className='login-input'
            required
            value={password}
            onChange={e => onInputChange(e, 'password')}
            onKeyUp={onPasswordEnter}
          />
        </FormControl>
      </form>
      <Button
        color='primary'
        size='large'
        variant='contained'
        className='login-arrow'
        onClick={onLoginClick}
      > Login </Button>
    </div>
  )
}

const mapStateToProps = ({ loginStore, appStore: { isLoggedIn } }) => ({ ...loginStore, isLoggedIn })

const { onInputChange, login } = LoginAction
const mapdispatchtoprops = {
  login,
  onInputChange,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(Login)
