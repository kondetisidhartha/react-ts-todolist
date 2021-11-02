export interface TodoProps {
  id: string;
  name: string;
}

export interface TodoListProps {
  items: { id: string; name: string }[];
  deleteTodo: (todoId: string) => void;
}

export interface NewTodoProps {
  updateTodo: (value: string) => void;
}
