import cartMutations from './mutations.js';
import cartGetters from './getters.js';
import cartActions from './actions.js';
export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  getters: cartGetters,
  mutations: cartMutations,
  actions: cartActions,
};
