import styles from './TodoList.module.scss';
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { createTodo, getTodos } from 'service/apis';
import { TodoItem, TodoListData } from 'types/todo';

const TodoList = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const [todoList, setTodoList] = useState<TodoListData>();
  const [todoTitle, setTodoTitle] = useState('');
  const [todoContent, setTodoContent] = useState('');
  const [selectedContent, setSelectedContent] = useState('choose Todo item to show...');

  const getTodoListData = useCallback(
    async (token: string) => {
      await getTodos(token)
        .then((res) => {
          localStorage.setItem('todoList', JSON.stringify(res.data));
        })
        .catch((err) => {
          navigate('/auth/login', { replace: true });
        });

      const todoListData = localStorage.getItem('todoList');
      if (todoListData) {
        setTodoList(JSON.parse(todoListData));
      } else {
        console.log('로컬스토리지에서 데이터를 가져오는데 실패했습니다.');
      }
    },
    [navigate]
  );

  const getTodoItemData = useCallback(
    async (token: string) => {
      const itemId = location.pathname.split('/')[1];
      await getTodos(token, itemId)
        .then((res) => {
          if (!Array.isArray(res.data.data)) {
            setSelectedContent((res.data.data as TodoItem).content);
          }
        })
        .catch((err) => {
          navigate('/', { replace: true });
        });
    },
    [location.pathname, navigate]
  );

  // check token is exist & get todo-list and selected todoItem's content info
  useEffect(() => {
    if (token) {
      getTodoListData(token);
      getTodoItemData(token);
    } else {
      navigate('/auth/login', { replace: true });
    }
  }, [token, navigate, getTodoListData, getTodoItemData]);

  // handle change event
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTodoTitle(value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTodoContent(value);
  };

  const handleModify = (e: MouseEvent<HTMLButtonElement>) => {};
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {};

  // handle submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setTodoTitle('');
    setTodoContent('');
    if (token) {
      createTodo(token, todoTitle, todoContent);
    }
  };

  return (
    <div className={styles.todoListWrapper}>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit} className={styles.todoListForm}>
        <label htmlFor='todoTitle'>Title</label>
        <input
          type='text'
          value={todoTitle}
          name=''
          id='todoTitle'
          placeholder='할 일의 제목을 입력해주세요.'
          onChange={handleTitleChange}
        />
        <label htmlFor='todoContent'>Content</label>
        <input
          type='text'
          value={todoContent}
          name=''
          id='todoContent'
          placeholder='할 일의 내용을 입력해주세요.'
          onChange={handleContentChange}
        />
        <button className={styles.createButton}>Create</button>
      </form>
      <section className={styles.titleListWrapper}>
        <h2>Todo List</h2>
        <ul className={styles.titleList}>
          {todoList &&
            todoList.data.map((todo, index) => (
              <li key={`todo-${index}`}>
                <NavLink to={`/${todo.id}`} className={({ isActive }) => (isActive ? styles.selectedTitle : '')}>
                  {todo.title}
                </NavLink>
                <button type='button' onClick={handleModify}>
                  ✍️
                </button>
                <button type='button' onClick={handleDelete}>
                  🗑
                </button>
              </li>
            ))}
        </ul>
      </section>
      <section className={styles.selectedContentWrapper}>
        <h2 className={styles.selectedContentHeader}>Todo Content</h2>
        <p className={styles.selectedContent}>{selectedContent}</p>
      </section>
    </div>
  );
};

export default TodoList;
