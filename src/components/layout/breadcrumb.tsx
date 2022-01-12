import React from 'react';
import { Breadcrumb } from '@douyinfe/semi-ui';
import { useSelector } from 'umi';
import RootStoreType from '@/models/store';

function BreadcrumbFC(): JSX.Element {
  const routes = useSelector((state: RootStoreType) => state.breadcrumb.routes);

  return routes.length ? (
    <Breadcrumb
      style={{
        marginBottom: '14px',
      }}
      routes={routes}
    />
  ) : (
    <></>
  );
}

export default BreadcrumbFC;
