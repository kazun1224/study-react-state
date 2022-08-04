import { Todo } from "src/types";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type State = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
};

// Log every time state is changed
// const log = (config) => (set, get, api) =>
//   config(
//     (...args) => {
//       // console.log("  old state", args);
//       console.log("  old state", get());
//       set(...args);
//       console.log("  new state", get());
//     },
//     get,
//     api
//   );
// create(log())で使える
// stateの変更をログに出す

// zustandのミドルウェア
// create(immer())で囲むとミュータブル（もとの値を変更する書き方：非推奨）で書いても非ミュータブル（元の値を変更いしない：推奨）になるので短いコードにできる
// immerで囲んででるerrorはcreate<>のあとに()を入れてcreate<>()()とすることで解決できる
// devtoolsはreduxdevtoolを使えるようになるミドルウェア

export const useStore = create<State>()(
  devtools(
    immer((set) => ({
      todos: TODOS,
      addTodo: (text) => {
        set(
          (state) => {
            state.todos.push({
              id: state.todos.length + 1,
              text,
              isDone: false,
            });
          },
          false,
          "todos/addTodo"
        );
      },
      toggleTodo: (id) => {
        set(
          (state) => {
            state.todos.forEach((todo) => {
              if (todo.id === id) {
                todo.isDone = !todo.isDone;
              }
            });
          },
          false,
          "todos/toggleTodo"
        );
      },
    }))
  )
);
