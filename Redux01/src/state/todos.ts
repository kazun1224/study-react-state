import { Reducer } from "react";
import { Todo } from "src/types";

// Actionの作成
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// 追加するロジック
export const addTodo = (text: Todo["text"]) => {
  return {
    type: ADD_TODO, // Actionを識別してくれる
    payload: { text }, // 情報を渡したい時に使用される
  } as const;
};

// チェックするロジック
export const toggleTodo = (id: Todo["id"]) => {
  return {
    type: TOGGLE_TODO, // Actionを識別してくれる
    payload: { id }, // 情報を渡したい時に使用される
  } as const;
};

// Reducerの作成
// Reducerは現在の状態にAction(変更)などを加えて新しいものを作る
type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// initial state
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// Reducer
export const todosReducer: Reducer<Todo[], Action> = (
  prevState  = TODOS,
  action
) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: prevState .length + 1,
        text: action.payload.text,
        isDone: false,
      };
      const newState = [...prevState ,newTodo];
      return newState;
    }
    case TOGGLE_TODO: {
      const newState = prevState .map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return newState;
    }

    default: {
      return prevState;
    }
  }
};
