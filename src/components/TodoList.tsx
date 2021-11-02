import React from "react";
import { TodoListProps } from "../todo.model";

import "./TodoList.css";

// React.FC responsible to give basic children props, but custom props must be used in Generic
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={props.deleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
