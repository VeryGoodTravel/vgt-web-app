const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('@/containers/Start'),
    production: true,
  },
  {
    path: '/offers/:page',
    name: 'Offers',
    component: () => import('@/containers/Offers'),
    production: true,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('@/containers/Details'),
    production: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/containers/Login'),
    production: true,
  },
  {
    path: '/debug',
    name: 'Debug',
    component: () => import('@/containers/Debug'),
    production: false,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    production: true,
  },
];

export default routes;
