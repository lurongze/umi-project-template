// 应用最外层
import React, { Component, ErrorInfo } from 'react';
import { history, Redirect } from 'umi';
import { Layout } from '@douyinfe/semi-ui';

import { SiderMenu, Header, Content } from '@/components';

interface stateType {
  hasError: boolean;
  errMsg: string;
}
class Main extends Component<any, stateType> {
  public static state = { hasError: false, errMsg: '' };
  public static getDerivedStateFromError(error: Error) {
    console.log('getError', error);
    return { hasError: true, errMsg: error.message || 'something went wrong!' };
  }
  private constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      errMsg: '',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log('error', error);
    console.log('errorInfo', errorInfo);
  }

  public render(): JSX.Element {
    console.log('main-tsx');
    const { children } = this.props;
    const { hasError, errMsg }: stateType = this.state;

    if (hasError) {
      return <div>{errMsg}</div>;
    }

    const item: string = localStorage.getItem('isLogin') || '';
    if (Number(item) !== 1) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: '100vh', border: '1px solid var(--semi-color-border)' }}>
        <SiderMenu />
        <Layout>
          <Header />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
