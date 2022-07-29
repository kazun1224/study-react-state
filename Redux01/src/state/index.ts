import { combineReducers, EmptyObject, legacy_createStore } from "redux";
import { Todo } from "src/types";
import { todosReducer } from "./Todos";

// Storeの作成
export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);

// type RootState = ReturnType<typeof store.getState>
// 下の型はstore.getStateというstoreを取得する関数からReturnTypeという型を利用して取得
export type RootState = EmptyObject & {
  todos: Todo[];
};
