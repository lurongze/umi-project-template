import React, { useEffect, useState, FC } from 'react';
import { history, useDispatch, useSelector, useStore } from 'umi';
import RootStoreType from '@/models/store';
import styles from './index.less';

function IndexPage(): React.ReactNode {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();
  const sysName = useSelector((state: RootStoreType) => state.global.sysName);
  const addCount = (): void => {
    console.log('sysName', sysName);
    dispatch({
      type: 'global/save',
      payload: {
        sysName: 'umi_project_template',
      },
    });
    setCount(count + 1);
  };

  const logOut = (): void => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div>
      <h1 className={styles.title} onClick={logOut}>
        Page index{sysName}
      </h1>
      <a style={{ userSelect: 'none' }} onClick={addCount}>
        点我count的值加1！！
      </a>
      <h2
        onClick={() => {
          history.push('/user');
        }}
      >
        count: {count}
      </h2>
    </div>
  );
}

export default IndexPage;
