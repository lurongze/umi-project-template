import { IRouteProps } from 'umi';

const routes: IRouteProps = [
  { path: '/login', name: 'login', component: '@/login' },
  {
    path: '/',
    component: '@/main',
    name: 'main',
    routes: [
      { path: '/index', name: 'index', component: '@/pages/index/index' },
      { path: '/user', name: 'user', component: '@/pages/user/user' },
    ],
  },
  {
    path: '/',
    redirect: '/index',
  },
];

export default routes;
