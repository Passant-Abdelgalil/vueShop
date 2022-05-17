export default {
  addToCart(context, payload) {
    // get item and item index if it already exists in the cart
    let { index, productItem } = context.getters.productItem({
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
    else {
      context.commit('insertNewItem', product);
      productItem = { ...product, qty: 1 };
    }
    // increase total cart quantity
    context.commit('incrementCartQty');
    // increase total cart price
    context.commit('increaseCartTotal', { price: payload.productData.price });
    // store item id to local storage to reload on refresh page
    let cartItems = localStorage.getItem('cart-items');
    // parse returned string as object
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    // get index of item if already exists
    const cartItemIdx = cartItems.findIndex((item) => item.id === product.id);
    // if already exists update the entry
    if (cartItemIdx != -1)
      cartItems[cartItemIdx] = { id: product.id, qty: productItem.qty };
    // else enter a new entry
    else cartItems.push({ id: product.id, qty: productItem.qty });
    // update local storage item
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
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

    // remove from local storage
    let cartItems = localStorage.getItem('cart-items');
    if (!cartItems) return;
    cartItems = JSON.parse(cartItems);

    localStorage.setItem(
      'cart-items',
      JSON.stringify(cartItems.filter((item) => item.id !== productItem.id))
    );
  },
  loadCart(context) {
    try {
      // get items from local storage
      let itemsList = localStorage.getItem('cart-items');
      // parse returned string as object
      itemsList = itemsList ? JSON.parse(itemsList) : [];
      let total = 0;
      let qty = 0;
      let items = [];
      // for each item in the list, update its quantity and the total price/quantity
      // props of the cart
      itemsList.forEach((item) => {
        const product = context.rootGetters['products/product']({
          id: item.id,
        });
        if (!product) return;
        total += product.price * item.qty;
        qty += item.qty;
        product.qty = item.qty;
        items.push(product);
      });
      context.commit('setItems', { items });
      context.commit('setTotal', { total });
      context.commit('setQty', { qty });
    } catch {
      console.warn('local storage has falsy data');
    }
  },
};
