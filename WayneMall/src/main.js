import { createApp } from 'vue';
import './css/reset.css';

import App from './App.vue';

import router from './router';

createApp(App).use(router).mount('#app');
