import userMutations from './mutations';
import userGetters from './getters';
import userActions from './actions';
export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: userMutations,
  getters: userGetters,
  actions: userActions,
};
