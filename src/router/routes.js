const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/containers/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/containers/About'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

export default routes;
