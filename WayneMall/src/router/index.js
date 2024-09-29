import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
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
