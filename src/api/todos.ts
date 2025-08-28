import axios from 'axios';
import type { Todo } from '../todo/models/Todo.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_SERVICE_HOST_URL}/todos`;
type TodoFetchedResults = { pageSize: number; todos: Todo[] }
type TodoCreatedResult = { message: string; id: string; }

export const findTodos = async () => {
  try {
    const { data } = await axios.get<TodoFetchedResults>(baseUrl, { params: {
      limit: 100,
      offset: 0
    } })
    return data.todos
  } catch (error) {
    console.warn(error)
    throw error
  }
}

export const createTodo = async (description: string) => {
  try {
    const { data } =  await axios.post<TodoCreatedResult>(baseUrl, { description })
    return data
  } catch (error) {
    console.warn(error)
    throw error
  }
}

export const toggleTodo = async (id: string) => {
  try {
    const url = `${baseUrl}/toggle/${id}`
    const { data: toggled } = await axios.patch<Todo>(url)
    return toggled
  } catch (error) {
    console.warn(error)
    throw error
  }
}
