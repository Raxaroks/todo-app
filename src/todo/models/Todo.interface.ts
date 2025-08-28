
export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoState {
  count: number;
  todos: Todo[];
  completed: number;
  pending: number;
}

export interface TodoContextProps {
  state: TodoState;
  toggleTodo: (id: string) => void;
  addTodo: (payload: Todo) => void;
}