import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  styles: [],
  // mfsu: {},
  fastRefresh: {},
});
