let authToken
export const Auth = {
  register: (token) => {
    authToken = token
    LocalStorageHelper.register(authToken)
  },

  isLoggedIn: () => {
    return !!authToken || !!LocalStorageHelper.getToken()
  },

  deregister: () => {
    LocalStorageHelper.deregister()
    authToken = undefined
  },

  getToken: () => {
    let token = ''
    authToken = authToken || LocalStorageHelper.getToken()
    if (authToken) {
      token = 'Bearer ' + authToken
    }
    return token
  }
}

const { btoa, atob, localStorage } = window || {}
const LocalStorageHelper = {
  register (token) {
    const encodedObj = token ? btoa(token) : ''
    localStorage.setItem('USER', encodedObj)
  },
  deregister () {
    localStorage.clear()
  },
  getToken () {
    let user = localStorage.getItem('USER') || ''
    if (user) {
      user = user ? atob(user) : ''
    }
    return user
  }
}
