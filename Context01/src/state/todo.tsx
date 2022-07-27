import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodosContexts = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    throw Error("No default value");
  },
});

type Props = {
  children: ReactNode;
};

export const TodosProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodosContexts.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContexts.Provider>
  );
};
