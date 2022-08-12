import { Outlet } from 'react-router-dom';

import styles from './Auth.module.scss';

const Auth = () => {
  console.log(localStorage.getItem('token'));
  return (
    <div className={styles.authWrapper}>
      <main className={styles.mainWrapper}>
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
