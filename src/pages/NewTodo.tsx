import { useFormik } from "formik"
import {
	getTodoFormikConfig,
	type NewTodo,
} from "@/todo/forms/todo.formik-config"
import classNames from "classnames"
import { useMutation } from "@tanstack/react-query"
import { createTodo } from "@/api/todos"

const NewTodo = () => {
	const { mutate } = useMutation({ mutationFn: createTodo })
	const formConfig = getTodoFormikConfig(({ description }: NewTodo) => {
		mutate(description, {
			onSuccess: (data) => {
				if (data.id) resetForm()
			},
		})
		resetForm()
	})
	const { handleSubmit, errors, touched, getFieldProps, resetForm, isValid } =
		useFormik<NewTodo>(formConfig)

	const className = classNames({
		btn: true,
		"disabled:opacity-75 cursor-not-allowed!": !isValid,
	})

	return (
		<section>
			<form onSubmit={handleSubmit} className='flex flex-col gap-1.5 text-left'>
				<label htmlFor='description'>Todo's description:</label>
				<input
					className='border-2 border-solid rounded-sm p-1.5 bg-gray-700'
					type='text'
					{...getFieldProps("description")}
				/>
				{touched.description && errors.description && (
					<span>{errors.description}</span>
				)}

				<button type='submit' className={className} disabled={!isValid}>
					Create
				</button>
			</form>
		</section>
	)
}

export default NewTodo
