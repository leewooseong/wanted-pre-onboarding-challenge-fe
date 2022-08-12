import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Join.module.scss';
import { HidePasswordIcon, ShowPasswordIcon } from 'assets/svg';
import { checkEmailValidation, checkPWValidation } from 'utils/auth';
import { postJoinRequest } from '../../../service/apis';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [showFirstPassWord, setShowFirstPassword] = useState(false);
  const [showSecondPassWord, setShowSecondPassword] = useState(false);
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [firstPWAlertMessage, setFirstPWAlertMessage] = useState('');
  const [secondPWAlertMessage, setSecondPWAlertMessage] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEmailAlertMessage(checkEmailValidation(value));
    setEmail(value);
  };

  const handleFirstPWChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setFirstPWAlertMessage(checkPWValidation(value));
    if (secondPassword) {
      setSecondPWAlertMessage(checkPWValidation(secondPassword, value));
    }
    setPassword(value);
  };

  const handleSecondPWChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSecondPWAlertMessage(checkPWValidation(value, password));
    setSecondPassword(value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id },
    } = e;

    if (!email && id === 'email') {
      setEmailAlertMessage(checkEmailValidation(email));
    }
    if (!password && id === 'firstPW') {
      setFirstPWAlertMessage(checkPWValidation(password));
    }
    if (!secondPassword && id === 'secondPW') {
      setSecondPWAlertMessage(checkPWValidation(secondPassword, password));
    }
  };

  const handleShowFirstPassword = () => {
    setShowFirstPassword((pre) => !pre);
  };

  const handleShowSecondPassword = () => {
    setShowSecondPassword((pre) => !pre);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postJoinRequest(email, password);
  };

  return (
    <section className={styles.joinWrapper}>
      <h1 className={styles.loginTitle}>회원가입</h1>
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
            type={showFirstPassWord ? 'text' : 'password'}
            id='firstPW'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={handleFirstPWChange}
            onBlur={handleOnBlur}
            autoCapitalize='off'
            autoCorrect='off'
            autoComplete='off'
            spellCheck='false'
          />
          <button type='button' onClick={handleShowFirstPassword}>
            {showFirstPassWord ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          </button>
        </fieldset>
        {firstPWAlertMessage && <p className={styles.alertMessage}>{firstPWAlertMessage}</p>}
        {/* second password */}
        <fieldset className={styles.inputWrapper}>
          <label htmlFor='password'>비밀번호 확인</label>
          <input
            type={showSecondPassWord ? 'text' : 'password'}
            id='secondPW'
            placeholder='비밀번호를 한 번 더 입력해주세요'
            value={secondPassword}
            onChange={handleSecondPWChange}
            onBlur={handleOnBlur}
            autoCapitalize='off'
            autoCorrect='off'
            autoComplete='off'
            spellCheck='false'
          />
          <button type='button' onClick={handleShowSecondPassword}>
            {showSecondPassWord ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          </button>
        </fieldset>
        {secondPWAlertMessage && <p className={styles.alertMessage}>{secondPWAlertMessage}</p>}
        {/* 회원가입 버튼 */}
        <button
          type='submit'
          className={cx(styles.loginButtonDisabled, {
            [styles.activate]:
              !emailAlertMessage &&
              !firstPWAlertMessage &&
              !secondPWAlertMessage &&
              email &&
              password &&
              secondPassword,
          })}
        >
          회원가입
        </button>
        <p className={styles.linkToLogin}>
          <Link to='/auth/login'>로그인 하러가기</Link>
        </p>
      </form>
    </section>
  );
};

export default Join;
