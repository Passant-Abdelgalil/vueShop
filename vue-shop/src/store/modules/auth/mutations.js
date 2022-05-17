export default {
  autoLogin(state) {
    state.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  },
  // function to mark the user as logged in
  login(state) {
    state.isLoggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  },
  // function to mark the user as logged out
  logout(state) {
    state.isLoggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  },
};
