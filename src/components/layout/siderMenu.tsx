import React, { useCallback, useState } from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { history, Link } from 'umi';

function SiderMenu(): JSX.Element {
  const [selectKeys, setSelectKeys] = useState<React.ReactText[]>([]);
  console.log('SiderMenu');

  return (
    <Layout.Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        // defaultSelectedKeys={['/index']}
        // selectedKeys={selectKeys}
        style={{ maxWidth: 220, height: '100%' }}
        // onSelect={handleClickItem}
        onSelect={({ itemKey, selectedKeys }: { itemKey: React.ReactText; selectedKeys: React.ReactText[] }) => {
          history.push(`${itemKey}`);
          // setSelectKeys(selectedKeys);
        }}
        items={[
          { itemKey: '/main/index', text: '首页', icon: <IconHome size="large" /> },
          { itemKey: '/main/user', text: '用户信息', icon: <IconHistogram size="large" /> },
          {
            itemKey: 'Live',
            text: '测试功能',
            icon: <IconLive size="large" />,
            items: [{ itemKey: '/Live/index', text: '测试功能sub', icon: <IconHome size="large" /> }],
          },
          { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
        ]}
        // header={{
        //   logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
        //   text: 'Semi 运营后台',
        // }}
        footer={{
          collapseButton: true,
        }}
      />
    </Layout.Sider>
  );
}

export default SiderMenu;
