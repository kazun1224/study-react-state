import { configureStore } from "@reduxjs/toolkit";
import {  EmptyObject } from "redux";
import { Todo } from "src/types";
import { todosReducer } from "./todos";

// Storeの作成

export const store = configureStore({
  reducer: {
    todos: todosReducer,

  },
})


// type RootState = ReturnType<typeof store.getState>
// 下の型はstore.getStateというstoreを取得する関数からReturnTypeという型を利用して取得
export type RootState = EmptyObject & {
  todos: Todo[];
};
