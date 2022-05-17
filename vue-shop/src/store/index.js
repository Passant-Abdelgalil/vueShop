import { createStore } from 'vuex';
import cartModule from './modules/cart/index';
import productsModule from './modules/products/index';
import authModule from './modules/auth/index';
export default createStore({
  modules: {
    cart: cartModule,
    products: productsModule,
    auth: authModule,
  },
});
