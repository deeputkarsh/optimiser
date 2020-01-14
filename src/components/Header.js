import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginAction } from '../redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Component = ({ isLoggedIn, route, logout }) => {
  // const getClickHandler = item => event => { window.location.pathname = item.route }

  const navItems = [{
    label: 'Create Strategy',
    route: '/create_strategy'
  },
  {
    label: 'Optimisation Summary',
    route: '/summary'
  },
  {
    label: 'Strategy Roll Up',
    route: '/strategy_roll_up'
  }]

  let activeIndex = navItems.findIndex(item => item.route === route)
  if (activeIndex === -1 || !isLoggedIn) {
    activeIndex = 0
  }

  return (
    <header className='header-wrapper'>
      <Link className='menu-link' to='/create_strategy'><div className='logo-container' /></Link>
      <div className='menu-container'>
        {isLoggedIn &&
          <Tabs
            value={route}
            indicatorColor='primary'
            textColor='primary'
          >
            {navItems.map((item, index) => (<Tab label={item.label} key={index} value={item.route} component={Link} to={item.route} />))}
            <Tab label='Logout' onClick={logout} />
          </Tabs>}
      </div>
    </header>
  )
}

const mapStateToProps = ({ appStore: { isLoggedIn, route } }) => ({ isLoggedIn, route })
const { logout } = LoginAction
export const Header = connect(mapStateToProps, { logout })(Component)
