import styles from './Routes.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './auth';
// import Header from "./Header/index";
// import Main from './main/index';
import Login from './auth/login';
import Join from './auth/join';

const App = () => {
  // 로그인 처리가 필요
  // - 토큰이 없으면 로그인 페이지
  // - 토큰이 있으면 Main 페이지

  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Join />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
