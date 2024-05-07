import store from '@/store';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: process.env.NODE_ENV === 'production' ? routes.filter((route) => route.production) : routes,
});

router.beforeEach((to, from) => {
  if (store.state.Auth.login && to.name === 'Login') {
    return from.name === 'Login' || from.name === undefined ? { name: 'Start' } : false;
  } else {
    return true;
  }
});

export default router;
