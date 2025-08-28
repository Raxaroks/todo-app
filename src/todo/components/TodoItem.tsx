import { useState } from 'react'
import classNames from 'classnames'
import { useFormik } from 'formik'
import type { Todo } from '../models/Todo.interface'
import { toggleTodo } from '@/api/todos'
import { useMutation } from '@tanstack/react-query'


type TodoItemProps = { todo: Todo }

const TodoItem = ({ todo }: TodoItemProps) => {
  const [ state, setTodo ] = useState(todo)
  const { mutate } = useMutation({ mutationFn: toggleTodo })
  const { getFieldProps, handleChange } = useFormik<Todo>({ initialValues: state, onSubmit: () => {} })

  const className = classNames({
    btn: false,
    "p-4 border-2 border-solid rounded-md flex flex-row-reverse items-center justify-end gap-3": true,
    "border-red-600": !state.completed,
    "border-sky-50": state.completed,
  })

  const handlingCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
    mutate(todo.id, { onSuccess: (data) => setTodo(data) })
  }

  return (
    <label htmlFor="description" className={className}>
      { todo.description }
      <input type="checkbox" { ...getFieldProps("completed") }
        onChange={ handlingCheckboxChange } 
        checked={state.completed} />
    </label>
  )
}

export default TodoItem