import { createStore } from 'vuex';
import cartModule from './modules/cart/index';
import productsModule from './modules/products/index';
import authModule from './modules/auth/index';
const state = createStore({
  modules: {
    cart: cartModule,
    products: productsModule,
    auth: authModule,
  },
});
export default state;
