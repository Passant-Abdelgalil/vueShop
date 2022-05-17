import userMutations from './mutations';
import userGetters from './getters';
export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: userMutations,
  getters: userGetters,
};
