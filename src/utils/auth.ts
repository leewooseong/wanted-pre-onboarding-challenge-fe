// alert message
export const VALIDATION_SUCCESS = '';
export const EMPTY_EMAIL = '아이디를 입력해주세요.';
export const INVALID_EMAIL = '아이디가 이메일 형식에 맞지 않습니다.';
export const EMPTY_PW = '비밀번호를 입력해주세요.';
export const SHORT_PW = '비밀번호는 8자 이상이여야 합니다.';
export const DIFFERENT_PW = '비밀번호가 일치하지 않습니다.';

export const checkEmailValidation = (email: string) => {
  const emailRule = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  if (email === '') {
    return EMPTY_EMAIL;
  } else if (emailRule.test(email)) {
    return VALIDATION_SUCCESS;
  } else {
    return INVALID_EMAIL;
  }
};

const checkPWAreSame = (pw: string, doubleCheckPW: string) => {
  return pw === doubleCheckPW ? VALIDATION_SUCCESS : DIFFERENT_PW;
};

const checkPWIsLong = (pw: string) => {
  return pw.length >= 8 ? VALIDATION_SUCCESS : SHORT_PW;
};

export const checkPWValidation = (pw: string, doubleCheckPW: string = '') => {
  if (pw === '') {
    return EMPTY_PW;
  } else if (doubleCheckPW) {
    return checkPWAreSame(pw, doubleCheckPW);
  } else {
    return checkPWIsLong(pw);
  }
};
