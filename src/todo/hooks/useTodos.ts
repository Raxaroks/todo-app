import { useContext } from 'react';
import { TodoContext } from '../context/Todo.context';
import type { TodoContextProps, Todo } from '../models/Todo.interface';

type customHookProps = Omit<TodoContextProps, "state"> & {
  todos: Todo[]
  pendings: Todo[]
}

export const useTodos = (): customHookProps => {
  const { state, toggleTodo, addTodo } = useContext(TodoContext);
  const { todos } = state;

  return {
    todos,
    toggleTodo,
    addTodo,
    pendings: todos.filter( task => !task.completed ),
  }
}