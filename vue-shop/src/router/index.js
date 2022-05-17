import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import ProductsList from '../views/ProductsList.vue';
import UserCart from '../views/UserCart.vue';
import ShopAdmin from '../views/ShopAdmin.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', name: 'products', component: ProductsList },
    {
      path: '/cart',
      name: 'cart',
      component: UserCart,
      meta: { requiresLogin: true },
    },
    {
      path: '/admin',
      name: 'admin',
      component: ShopAdmin,
      meta: { requiresLogin: true },
    },
    { path: '/:catchAll(.*)*', name: '404', component: PageNotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresLogin && !store.getters.isLogged)
    return next({ name: 'products' });
  else next();
});
export default router;
