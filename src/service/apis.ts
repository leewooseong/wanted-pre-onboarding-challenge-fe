import { instance } from '../utils/axios';
import { authAPIResponse } from 'types/auth';

const BASE_URL = 'https://localhost:8080';
// const BASE_URL = 'https://wanted-humanscape.herokuapp.com/'

// export const getDissNameCodeList = (keyword: string) =>
//   instance.get<authAPIResponse>(BASE_URL, { params: { searchText: keyword } }).then((res) => res.data.result)

export const postJoinRequest = (email: string, password: string) =>
  instance.post<authAPIResponse>(BASE_URL, { params: { email, password } }).then((res) => res.data);
