import React from 'react'
// import { Link } from 'react-router-dom'
import DehazeIcon from '@material-ui/icons/Dehaze'
import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'

export const Header = ({ login }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className='header-wrapper'>
      <div className='logo-container' />
      <div className='menu-container'>
        <DehazeIcon onClick={handleClick} />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* <MenuItem onClick={handleClose}><Link className='link' to={`${baseUrl}`}>Image Recognition Watson</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='link' to={`${baseUrl}speech`}>Speech To Text</Link></MenuItem> */}
        </Menu>
      </div>
    </header>
  )
}
