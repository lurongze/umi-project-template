import { useEffect, useState } from 'react';
import { history } from 'umi';
import RootStoreType from '@/models/store';
import styles from './user.less';

function UserPage() {
  return (
    <div>
      <h1 className={styles.title}>Page User</h1>
    </div>
  );
}

export default UserPage;
