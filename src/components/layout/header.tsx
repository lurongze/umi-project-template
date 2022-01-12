import React, { useState } from 'react';
import { Layout, Nav, Button, Avatar } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons';

function Header(): JSX.Element {
  const [titlt, setTitle] = useState('LLDMZ运营平台');
  console.log('Header');
  return (
    <Layout.Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        mode="horizontal"
        header={{
          logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
          text: titlt,
        }}
        footer={
          <>
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
              onClick={() => {
                setTitle('LLDMZ运营后台');
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
    </Layout.Header>
  );
}

export default Header;
