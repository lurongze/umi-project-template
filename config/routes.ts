import { IRouteProps } from 'umi';

const routes: IRouteProps = [
  { path: '/login', component: '@/login' },
  {
    path: '/',
    component: '@/main',
    routes: [
      { path: '/index', component: '@/pages/index/index' },
      { path: '/user', component: '@/pages/user/user' },
    ],
  },
];

export default routes;
