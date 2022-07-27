import type { NextPage } from "next";
import { useContext } from "react";
import { TodosContexts, TodosDispatchContexts } from "src/state/todo";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const todos = useContext(TodosContexts);
  const setTodos = useContext(TodosDispatchContexts);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3>Todo一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              style={{ width: "1.5rem", height: "1.5rem" }}
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
