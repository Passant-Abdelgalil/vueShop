export default {
  products(state) {
    return state.products;
  },
  product: (state) => (payload) => {
    return state.products.find((element) => element.id === payload.id);
  },
};
