export default {
  // function to mark the user as logged in
  login(state) {
    state.isLoggedIn = true;
  },
  // function to mark the user as logged out
  logout(state) {
    state.isLoggedIn = false;
  },
};
