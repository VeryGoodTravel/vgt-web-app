import store from '@/store';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: process.env.NODE_ENV === 'production' ? routes.filter((route) => route.production) : routes,
});

router.routeBack = (r) => {
  const previous = r.options.history.state.back;
  if (/^\/offers\/[0-9]+$/.test(previous) || /^\/details\/[a-zA-Z0-9-_]+$/.test(previous)) {
    r.back();
  } else {
    r.push({ name: 'Start' });
  }
};

router.beforeEach((to, from) => {
  store.dispatch('setIsLoading', false);
  store.dispatch('clearLoadingMessage');
  store.dispatch('setIsModalOpen', false);
  store.dispatch('clearModalComponent');
  if (store.state.Auth.login && to.name === 'Login') {
    return from.name === 'Login' || from.name === undefined ? { name: 'Start' } : false;
  } else {
    return true;
  }
});

export default router;
