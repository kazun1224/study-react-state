import type { NextPage } from "next";
import { ComponentProps, Dispatch, SetStateAction, useContext } from "react";
import { TodosDispatchContexts } from "src/state/todo";
import { Todo } from "src/types";

const Add: NextPage = () => {
  const  setTodos  = useContext(TodosDispatchContexts);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodo: Todo[]) => {
      const newTodos: Todo = { id: prevTodo.length + 1, text, isDone: false };
      return [...prevTodo, newTodos];
    });
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>Todo追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
