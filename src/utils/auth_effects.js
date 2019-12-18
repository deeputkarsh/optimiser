export const getLogoutEffect = (history, isLoggedIn) => _ => {
  if (!isLoggedIn) {
    history.push('/login')
  }
}
