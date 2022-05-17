export default {
  //  getter of all cart list items
  products(state) {
    return state.items;
  },
  // trying to pass payload to the getter
  productItem2(state, payload) {
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.id === payload.id
    );
    if (productInCartIndex >= 0)
      return {
        index: productInCartIndex,
        productItem: state.items[productInCartIndex],
      };
    return { index: -1, productItem: null };
  },
  // getter of a specific item from the cart list given it's id
  productItem: (state) => (payload) => {
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.id === payload.id
    );
    // if the product exists, return its index and product object
    if (productInCartIndex != -1)
      return {
        index: productInCartIndex,
        productItem: state.items[productInCartIndex],
      };
    // else return -1 as index and null as product object
    return { index: -1, productItem: null };
  },
  // getter of cart total price
  totalPrice(state) {
    return state.total;
  },
  // getter of cart total quantity
  totalQty(state) {
    return state.qty;
  },
};
