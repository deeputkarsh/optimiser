export const getRouteChangeEffect = (history, onRouteChange) => _ => history.listen((location, action) => {
  console.log('HISTORY', action, location.pathname)
  onRouteChange(location.pathname)
})
