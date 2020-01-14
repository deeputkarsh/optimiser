import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { LoginAction } from '../redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Component = props => {
  const { isLoggedIn, location, logout } = props

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

  const invalidRoute = !navItems.find(item => item.route === location.pathname)

  return (
    <header className='header-wrapper'>
      <Link className='menu-link' to='/create_strategy'><div className='logo-container' /></Link>
      <div className='menu-container'>
        {!invalidRoute && isLoggedIn &&
          <Tabs
            value={location.pathname}
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

const mapStateToProps = ({ appStore: { isLoggedIn } }) => ({ isLoggedIn })
const { logout } = LoginAction
export const Header = withRouter(connect(mapStateToProps, { logout })(Component))
