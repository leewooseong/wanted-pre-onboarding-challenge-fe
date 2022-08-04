import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import styles from './login.module.scss';
import cx from 'classnames';
import { HidePasswordIcon, ShowPasswordIcon } from 'assets/svg';
import AlertMessage from './AlertMessage';

// id alert messages
const EMPTY_ID = 'EMPTY_ID';
const INVALID_ID = 'INVALID_ID';

// pw alert messages
const EMPTY_PW = 'EMPTY_PW';
const SHORT_PW = 'SHORT_PW';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassWord, setShowPassword] = useState(false);
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [pwAlertMessage, setPwAlertMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRule = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    return emailRule.test(email);
  };

  const validatePW = (pw: string) => {
    return pw.length < 8 ? false : true;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    if (validateEmail(value)) {
      setEmailAlertMessage('');
    } else {
      setEmailAlertMessage(INVALID_ID);
    }
    if (value === '') {
      setEmailAlertMessage(EMPTY_ID);
    }

    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (validatePW(value)) {
      setPwAlertMessage('');
    } else {
      setPwAlertMessage(SHORT_PW);
    }
    if (value === '') {
      setPwAlertMessage(EMPTY_PW);
    }
    setPassword(value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id },
    } = e;

    if (!email && id === 'email') {
      setEmailAlertMessage(EMPTY_ID);
    }
    if (!password && id === 'password') {
      setPwAlertMessage(EMPTY_PW);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (id === '') {
    //   setIdAlert(true)
    // }
    // if (password === '') {
    //   setPasswordAlert(true)
    // }
    // if (password === '' || id === '') {
    //   return
    // }
    // onLogin(id, password, checkValue, onFailHandler, rememberIdHandler)
  };

  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  return (
    <div className={styles.loginWrapper}>
      <main className={styles.mainWrapper}>
        <section className={styles.contentWrapper}>
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
            {emailAlertMessage && <AlertMessage message={emailAlertMessage} />}
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
            {pwAlertMessage && <AlertMessage message={pwAlertMessage} />}
            {/* 로그인 버튼 */}
            <button
              type='submit'
              className={cx(styles.loginButtonDisabled, {
                [styles.activate]: !emailAlertMessage && !pwAlertMessage && password && email,
              })}
            >
              로그인
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
