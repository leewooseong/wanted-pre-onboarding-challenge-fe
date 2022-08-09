import { instance } from '../utils/axios';
import { authAPIResponse } from 'types/auth';
import { TodoListData } from 'types/todo';
import { TodoItemData } from '../types/todo.d';

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

export const getTodos = (token: string, id: string = '') => {
  const pathVariable = id ? `/${id}` : '';
  return instance.get<TodoItemData | TodoListData>(`${BASE_URL}/todos${pathVariable}`, {
    headers: { Authorization: token },
  });
};

export const createTodo = (token: string, title: string, content: string) =>
  instance
    .post<TodoItemData>(
      `${BASE_URL}/todos`,
      { title: title, content: content },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);

export const updateTodo = (token: string, title: string, content: string) =>
  instance.put<TodoItemData>(
    `${BASE_URL}/todos`,
    { title, content },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const deleteTodo = (token: string, id: string) =>
  instance.delete<TodoItemData>(`${BASE_URL}/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });
