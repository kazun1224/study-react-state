import { FC } from "react";
import { useTodos } from "src/state/todo";

export const TodoCounter: FC = () => {
  const todos = useTodos();
  return <h2>Todo: {todos.length}件</h2>;
};
