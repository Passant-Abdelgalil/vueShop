export default {
  // function to insert new item in the cart list given its id from the product list state
  insertNewItem(state, payload) {
    const newItem = {
      ...payload,
      qty: 1,
    };
    state.items.push(newItem);
  },
  incrementCartQty(state) {
    state.qty++;
  },
  decreaseCartQty(state, payload) {
    state.qty -= payload.qty;
  },
  increaseCartTotal(state, payload) {
    state.total += payload.price;
  },
  decreaseCartTotal(state, payload) {
    state.total -= payload.price;
  },
  deleteCartItem(state, payload) {
    state.items.splice(payload.idx, 1);
  },
  setItems(state, payload) {
    state.items = payload.items;
  },
  setTotal(state, payload) {
    state.total = payload.total;
  },
  setQty(state, payload) {
    state.qty = payload.qty;
  },
};
