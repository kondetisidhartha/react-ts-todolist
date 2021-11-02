import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { TodoProps } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const updateTodoHandler = (value: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), name: value },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo updateTodo={(value: string) => updateTodoHandler(value)} />
      <TodoList
        items={todos}
        deleteTodo={(todoId: string) => deleteTodoHandler(todoId)}
      />
    </div>
  );
};
export default App;
