import React, { createContext, useContext, useReducer } from "react";
import { Patient } from "../types";

import { Action } from "./reducer";
//设置状态类型
export type State = {
  patients: { [id: string]: Patient };
};
//初始化状态
const initialState: State = {
  patients: {}
};
//创建环境
export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);
//设置提供状态
type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider = ({
  reducer,
  children
}: StateProviderProps) => {
  //获取状态和dispath
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      //设置状态组件
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
//注册一个方法调用切换环境
export const useStateValue = () => useContext(StateContext);
