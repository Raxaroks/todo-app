import type { LazyExoticComponent, JSX } from 'react';
import NewTodo from '@/pages/NewTodo';
import TodoList from '@/pages/TodoList';

type JSXFunctionalComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXFunctionalComponent> | JSXFunctionalComponent;
}

export const routes: Route[] = [
  {
    to: '/list',
    path: 'list',
    name: 'My Todo List',
    Component: TodoList
  },
  {
    to: '/new',
    path: 'new',
    name: 'New Todo',
    Component: NewTodo
  },
];