import React, { useEffect, useState, FC } from 'react';
import { history, Link, useDispatch, useSelector, useStore } from 'umi';
import RootStoreType from '@/models/store';
import styles from './index.less';
import { Button } from '@douyinfe/semi-ui';

function IndexPage(): JSX.Element {
  return <div onClick={() => history.push('/login')}>Index Page</div>;
}

export default IndexPage;
