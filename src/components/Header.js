import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DehazeIcon from '@material-ui/icons/Dehaze'
import { Menu, MenuItem } from '@material-ui/core'
import { LoginAction } from '../redux'

const Component = ({ isLoggedIn, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)
  const logOut = () => {
    handleClose()
    logout()
  }

  return (
    <header className='header-wrapper'>
      <Link className='menu-link' to='/'><div className='logo-container' /></Link>
      <div className='menu-container'>
        {isLoggedIn && <DehazeIcon onClick={handleClick} />}
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className='menu-container'
        >
          <MenuItem onClick={handleClose}><Link className='menu-link' to='/create_strategy'>Create Strategy</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menu-link' to='/'>Strategy Roll up</Link></MenuItem>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </Menu>
      </div>
    </header>
  )
}

const mapStateToProps = ({ appStore: { isLoggedIn } }) => ({ isLoggedIn })
const { logout } = LoginAction
export const Header = connect(mapStateToProps, { logout })(Component)
