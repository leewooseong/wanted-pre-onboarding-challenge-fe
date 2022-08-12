import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { HidePasswordIcon, ShowPasswordIcon } from 'assets/svg';
import { checkEmailValidation, checkPWValidation } from 'utils/auth';
import { postLoginRequest } from '../../../service/apis';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassWord, setShowPassword] = useState(false);
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [pwAlertMessage, setPWAlertMessage] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEmailAlertMessage(checkEmailValidation(value));
    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPWAlertMessage(checkPWValidation(value));
    setPassword(value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id },
    } = e;

    if (!email && id === 'email') {
      setEmailAlertMessage(checkEmailValidation(email));
    }
    if (!password && id === 'password') {
      setPWAlertMessage(checkPWValidation(email));
    }
  };

  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLoginRequest(email, password);
    navigate('/', { replace: true });
  };

  return (
    <section className={styles.loginWrapper}>
      <h1 className={styles.loginTitle}>로그인</h1>
      <form onSubmit={handleSubmit} className={styles.loginContent}>
        {/* id */}
        <fieldset className={styles.inputWrapper}>
          <label htmlFor='id'>아이디</label>
          <input
            type='text'
            id='email'
            placeholder='아이디를 입력해주세요'
            value={email}
            onChange={handleEmailChange}
            onBlur={handleOnBlur}
            autoCapitalize='off'
            autoCorrect='off'
            autoComplete='off'
            spellCheck='false'
          />
        </fieldset>
        {emailAlertMessage && <p className={styles.alertMessage}>{emailAlertMessage}</p>}
        {/* password */}
        <fieldset className={styles.inputWrapper}>
          <label htmlFor='password'>비밀번호</label>
          <input
            type={showPassWord ? 'text' : 'password'}
            id='password'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={handlePasswordChange}
            onBlur={handleOnBlur}
            autoCapitalize='off'
            autoCorrect='off'
            autoComplete='off'
            spellCheck='false'
          />
          <button type='button' onClick={handleShowPassword}>
            {showPassWord ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          </button>
        </fieldset>
        {pwAlertMessage && <p className={styles.alertMessage}>{pwAlertMessage}</p>}

        <button
          type='submit'
          className={cx(styles.loginButtonDisabled, {
            [styles.activate]: !emailAlertMessage && !pwAlertMessage && password && email,
          })}
        >
          로그인
        </button>
        <p className={styles.linkToJoin}>
          <Link to='/auth/join'>회원가입 하러가기</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
