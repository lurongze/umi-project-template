import { Effect, Reducer, Subscription } from 'umi';

export interface BreadcrumbModelState {
  routes: string[];
}

export interface BreadcrumbModelType {
  namespace: string;
  state: BreadcrumbModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<BreadcrumbModelState>;
    clear: Reducer<BreadcrumbModelState>;
    add: Reducer<BreadcrumbModelState>;
  };
  // subscriptions: { setup: Subscription };
}

const BreadcrumbModel: BreadcrumbModelType = {
  namespace: 'breadcrumb',

  state: {
    routes: ['首页', '当这个页面标题很长时需要省略', '上一页222', '详情页'],
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    clear() {
      return { routes: [] };
    },
    add(state, action) {
      return {
        routes: [...(state?.routes || []), action.payload],
      };
    },
    save(_state, action) {
      return { routes: action.payload };
    },
  },
};

export default BreadcrumbModel;
