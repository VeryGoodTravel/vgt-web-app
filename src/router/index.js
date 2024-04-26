import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: process.env.NODE_ENV === 'production' ? routes.filter((route) => route.production) : routes,
});

export default router;
