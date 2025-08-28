import { useReducer, type JSX } from 'react';
import { TodoContext } from './Todo.context';
import { todoReducer } from './Todo.reducer';
import type { Todo, TodoState } from '../models/Todo.interface';

interface Props { children: JSX.Element | JSX.Element[] };

const INITIAL_STATE: TodoState = {
  count: 0,
  todos: [],
  completed: 0,
  pending: 0
};

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer( todoReducer, INITIAL_STATE )

  const toggleTodo = (id: string): void => { dispatch({
    type: "toggle", payload: { id }
  }) }

  const addTodo = (payload: Todo): void => {
    dispatch({ type: "add", payload })
  }

  return (<><TodoContext.Provider value={{ state, toggleTodo, addTodo }}>{children}</TodoContext.Provider></>)
}
