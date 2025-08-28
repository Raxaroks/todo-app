import type { Todo, TodoState } from '../models/Todo.interface';

type Action = { type: "add", payload: Todo } | { type: "toggle", payload: { id: string } };

export const todoReducer = ( state: TodoState, action: Action ): TodoState => {
  let todos: Todo[] = []

  switch(action.type) {
    case "add":
      todos = [...state.todos, action.payload]
      return {
        todos,
        count: todos.length,
        completed: todos.filter( t => t.completed ).length,
        pending: todos.filter( t => !t.completed ).length,
      };
    case "toggle":
      todos = state.todos.map( ({...task}) => {
        if (task.id === action.payload.id) task.completed = !task.completed;
        return task;
      } )
      return {
        ...state,
        todos,
        completed: todos.filter( t => t.completed ).length,
        pending: todos.filter( t => !t.completed ).length,
      };
    default:
      return state;
  }
}
