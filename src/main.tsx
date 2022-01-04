// 应用最外层
import React, { Component, ErrorInfo } from 'react';
import { Redirect } from 'umi';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
import {
  IconSemiLogo,
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
} from '@douyinfe/semi-icons';

interface stateType {
  hasError: boolean;
  errMsg: string;
}

const { Header, Footer, Sider, Content } = Layout;
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

  public render(): React.ReactNode {
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
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            defaultSelectedKeys={['Home']}
            style={{ maxWidth: 220, height: '100%' }}
            items={[
              { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
              { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
              { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
              { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
            ]}
            header={{
              logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
              text: 'Semi 运营后台',
            }}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Nav
              mode="horizontal"
              footer={
                <>
                  <Button
                    theme="borderless"
                    icon={<IconBell size="large" />}
                    style={{
                      color: 'var(--semi-color-text-2)',
                      marginRight: '12px',
                    }}
                  />
                  <Button
                    theme="borderless"
                    icon={<IconHelpCircle size="large" />}
                    style={{
                      color: 'var(--semi-color-text-2)',
                      marginRight: '12px',
                    }}
                  />
                  <Avatar color="orange" size="small">
                    YJ
                  </Avatar>
                </>
              }
            />
          </Header>
          <Content
            style={{
              padding: '24px',
              backgroundColor: 'var(--semi-color-bg-0)',
            }}
          >
            <Breadcrumb
              style={{
                marginBottom: '24px',
              }}
              routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
            />
            <div
              style={{
                borderRadius: '10px',
                border: '1px solid var(--semi-color-border)',
                height: 'calc(100vh - 285px)',
                padding: '32px',
                overflow: 'auto',
              }}
            >
              <Skeleton placeholder={<Skeleton.Paragraph rows={50} />} loading={true}>
                <p>Hi, Hello world.</p>
                <p>Hi, Bytedance dance dance.</p>
              </Skeleton>
            </div>
          </Content>
          <Footer
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
              color: 'var(--semi-color-text-2)',
              backgroundColor: 'rgba(var(--semi-grey-0), 1)',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
              <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
            </span>
            <span>
              <span style={{ marginRight: '24px' }}>平台客服</span>
              <span>反馈建议</span>
            </span>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
