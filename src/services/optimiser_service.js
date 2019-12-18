import Axios from 'axios'

const USER_END_POINT = process.env.LOGIN_API_ENDPOINT + '/user'
const USER_API = {
  LOGIN: USER_END_POINT + '/login',
  LOGOUT: USER_END_POINT + '/logout',
  SIGNUP: USER_END_POINT + '/signup',
  GET_USER_DATA: USER_END_POINT + '/',
  UPDATE_PROFILE: USER_END_POINT + '/updateProfile'
}

export const optimiserAPI = {

  login (credentials) {
    return { data: { token: 'psadadj', message: 'Logged In Successfully' } }
    // const Authorization = `Basic ${credentials}`
    // return Axios.get(USER_API.LOGIN, { headers: { Authorization } })
  },

  getStrategyData () {
    return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  getSummaryList () {
    return { data: summaryList }
    // return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  updateStrategy (userData) {
    return Axios.post(USER_API.UPDATE_PROFILE, userData, { headers: { setBearerAuth: true } })
  },

  logout () {
    return { data: { message: 'Logged Out Successfully' } }
    // return Axios.get(USER_API.LOGOUT, { headers: { setBearerAuth: true } })
  }
}

const summaryList = [{
  strategyInput: {
    WOS: 8,
    maxStep: 5,
    maxDisc: 50,
    minStep: 5,
    minDisc: 5
  },
  forecastResults: {
    WOS: 5,
    erosion: 751549.67,
    EOH: 27300769,
    EOHUnits: 3,
    avgOBDisc: 10,
    salesUnits: 4,
    COGS: 200,
    recoveryRate: 200
  }
}, {
  strategyInput: {
    WOS: 8,
    maxStep: 5,
    maxDisc: 50,
    minStep: 5,
    minDisc: 5
  },
  forecastResults: {
    WOS: 5,
    erosion: 751549.67,
    EOH: 27300769,
    EOHUnits: 3,
    avgOBDisc: 10,
    salesUnits: 4,
    COGS: 200,
    recoveryRate: 200
  }
}]
