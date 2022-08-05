import { instance } from '../utils/axios';
import { authAPIResponse } from 'types/auth';

const BASE_URL = 'http://localhost:8080';

export const postJoinRequest = (email: string, password: string) =>
  instance
    .post<authAPIResponse>(`${BASE_URL}/users/create`, { email: email, password: password })
    .then((res) => console.log(res));

export const postLoginRequest = (email: string, password: string) => {
  instance
    .post<authAPIResponse>(`${BASE_URL}/users/login`, { email: email, password: password })
    .then((res) => localStorage.setItem('token', res.data.token));
};
