import axios from 'axios'
import { Auth } from './utils'

// const localStorage = window.localStorage

const setupInterceptors = store => {
  axios.interceptors.request.use(
    config => {
      config.headers['content-type'] = 'application/json'
      if (config.headers.setBearerAuth) {
        config.headers.Authorization = Auth.getToken()
        delete config.headers.setBearerAuth
      }
      // change any global config on request
      // store.dispatch(showLoader())
      return config
    },
    error => {
      // Do something with request error
      // store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    config => {
      if (config.status === 200) {
        console.log(config)
        // change something on response success
        // store.dispatch(showLoader())
        return config
      }
    },
    error => {
      // store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )
}
const handleError = (store, error) => {
  const err = error.response ? error.response.data : error
  err.timestamp = Date.now()
  if (error && error.response && error.response.status === 406) {
    /* localStorage.clear()
    window.location.href = '/' */
  }
  /* if (
    (err.statusCode === 500 &&
      err.message === 'INTERNAL SERVER ERROR: jwt expired!!') ||
    err.statusCode === 401
  ) {
    store.dispatch(errorHandler(err))
    store.dispatch(clearAuth())
  } else {
    store.dispatch(errorHandler(err))
  } */
}

export default {
  setupInterceptors
}
