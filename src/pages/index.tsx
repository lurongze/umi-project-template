import {history} from 'umi'
import styles from './index.less';

export default function IndexPage() {

  const logOut = ()=>{
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div>
      <h1 className={styles.title} onClick={logOut}>Page index</h1>
    </div>
  );
}
