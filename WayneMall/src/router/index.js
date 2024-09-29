import { createRouter, createWebHistory } from 'vue-router';
import test from '../views/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
