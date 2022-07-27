import { FC, useContext } from "react";
import { TodosContexts } from "src/state/todo";

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodosContexts);
  return <h2>Todo: {todos.length}件</h2>;
};
