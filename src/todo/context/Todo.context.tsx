import { createContext } from 'react';
import type { TodoContextProps } from '../models/Todo.interface';

export const TodoContext = createContext<TodoContextProps>( {} as TodoContextProps );
