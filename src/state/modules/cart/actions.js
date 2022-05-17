export default {
  addToCart(context, payload) {
    // get item and item index if it already exists in the cart
    const { index, productItem } = context.getters.productItem({
      id: payload.productData.id,
    });
    // get product data from product list items global state
    // to avoid redundancy of creating a new object with same data
    // in case creating a new instance is needed
    const product = context.rootGetters['products/product']({
      id: payload.productData.id,
    });
    // if already exists, increase the item quantity
    if (index != -1) productItem.qty++;
    // else insert new instance of the item in the cart
    else context.commit('insertNewItem', product);
    // increase total cart quantity
    context.commit('incrementCartQty');
    // increase total cart price
    context.commit('increaseCartTotal', { price: payload.productData.price });
  },

  removeFromCart(context, payload) {
    // get item and item index if it already exists in the cart
    const { index, productItem } = context.getters.productItem(payload);
    // if the item doesn't exists, do nothing and return
    if (index == -1) return;
    // else, delete the item from the cart
    context.commit('deleteCartItem', { idx: index });
    // decrease total cart quantity by item's quantity
    context.commit('decreaseCartQty', { qty: productItem.qty });
    // decrease total cart quantity by item's total price
    const totPrice = productItem.price * productItem.qty;
    context.commit('decreaseCartTotal', { price: totPrice });
  },
};
