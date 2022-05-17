import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import state from './state/index.js';
const app = createApp(App);

app.use(router);
app.use(state);
app.component('base-badge', BaseBadge);

app.mount('#app');
