import * as Yup from 'yup';
import type { FormikConfig } from 'formik';
import type { Todo } from '../models/Todo.interface';


export type NewTodo = Omit<Todo, "id" | "completed">

export function getTodoFormikConfig( onSubmit: (values: NewTodo) => void ) {
  const config: FormikConfig<NewTodo> = { 
    initialValues: { description: "" }, 
    onSubmit,
    validationSchema: Yup.object({
      description: Yup.string()
                    .required()
                    .min(5)
                    .max(100)
    })
  }
  return config
}
