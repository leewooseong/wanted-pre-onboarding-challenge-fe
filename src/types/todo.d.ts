export interface TodoItem {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoListData {
  data: TodoItem[];
}

export interface TodoItemData {
  data: TodoItem;
}
