import React from 'react';
import { Layout, Skeleton } from '@douyinfe/semi-ui';
import { Breadcrumb } from '@/components';

function Content(props: any): JSX.Element {
  console.log('contentProps', props);
  return (
    <Layout.Content
      style={{
        padding: '24px',
        backgroundColor: 'var(--semi-color-bg-0)',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 60px)',
        overflow: 'hidden',
      }}
    >
      <Breadcrumb />
      <div
        style={{
          borderRadius: '10px',
          border: '1px solid var(--semi-color-border)',
          // height: 'calc(100vh - 225px)',
          padding: '32px',
          flex: 1,
          overflow: 'auto',
        }}
      >
        {props.children || (
          <Skeleton placeholder={<Skeleton.Paragraph rows={10} />} loading={true}>
            <p>Hi, umi-project-template.</p>
          </Skeleton>
        )}
      </div>
    </Layout.Content>
  );
}

export default Content;
