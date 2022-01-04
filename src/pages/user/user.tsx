import { useEffect, useState } from 'react';
import { history, useSelector } from 'umi';
import RootStoreType from '@/models/store';
import styles from './user.less';

function UserPage() {
  const sysName = useSelector((state: RootStoreType) => state.global.sysName);

  return (
    <div>
      <h1 className={styles.title}>Page User {sysName};</h1>
    </div>
  );
}

export default UserPage;
