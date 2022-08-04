import styles from './Routes.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './login';
// import Header from "./Header/index";
import Main from './Main/index';

const App = () => {
  // 로그인 처리가 필요
  // - 토큰이 없으면 로그인 페이지
  // - 토큰이 있으면 Main 페이지

  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path="/" element={<Main />}>
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Route> */}
      </Routes>
    </div>
  );
};

export default App;
