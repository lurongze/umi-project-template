import { Effect, Reducer, Subscription } from 'umi';

export interface GlobalModelState {
  sysName: string;
}

export interface GlobalModelType {
  namespace: string;
  state: GlobalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
  };
  // subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    sysName: 'umi-project-template',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       console.log('订阅监听pathname的变化：', pathname, dispatch);
  //     });
  //   },
  // },
};

export default GlobalModel;
