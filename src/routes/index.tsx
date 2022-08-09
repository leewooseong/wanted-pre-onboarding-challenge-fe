import styles from './Routes.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './auth';
import Login from './auth/login';
import Join from './auth/join';
import NotFound from './notFound';
import TodoList from './todoList';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<TodoList />}>
          <Route path=':id' element={<TodoList />} />
        </Route>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Join />} />
        </Route>
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  );
};

export default App;
