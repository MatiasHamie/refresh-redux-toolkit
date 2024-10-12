import { useState } from "react";
import { useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoID, setTodoID] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = {}, isLoading } = useGetTodoByIdQuery(todoID);

  const nextTodo = () => {
    setTodoID((prev) => prev + 1);
  };

  const prevTodo = () => {
    if (todo === 1) return;
    setTodoID((prev) => prev - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>

      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
