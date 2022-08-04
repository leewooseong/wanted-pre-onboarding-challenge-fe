import styles from './AlertMessage.module.scss';

// id alert messages
const EMPTY_ID = 'EMPTY_ID';
const INVALID_ID = 'INVALID_ID';

// pw alert messages
const EMPTY_PW = 'EMPTY_PW';
const SHORT_PW = 'SHORT_PW';

interface Props {
  message: string;
}

const AlertMessage = ({ message }: Props) => {
  switch (message) {
    case EMPTY_ID: {
      return <p className={styles.alertMessage}>아이디를 입력해주세요.</p>;
    }
    case INVALID_ID: {
      return <p className={styles.alertMessage}>아이디가 이메일 형식에 맞지 않습니다.</p>;
    }
    case EMPTY_PW: {
      return <p className={styles.alertMessage}>비밀번호를 입력해주세요.</p>;
    }
    case SHORT_PW: {
      return <p className={styles.alertMessage}>비밀번호는 8자 이상이여야 합니다.</p>;
    }
    default:
      return <></>;
  }
};

export default AlertMessage;
