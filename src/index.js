import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import interceptor from './interceptor'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { configureStore } from './redux'
import './styles/index.scss'
import App from './routes'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0b66af' },
    secondary: { main: '#686868' }
  }
})
const reduxState = {}
const store = configureStore(reduxState)
interceptor.setupInterceptors(store)
const renderDom = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(renderDom, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
