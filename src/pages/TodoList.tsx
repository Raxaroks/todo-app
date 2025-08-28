import { useQuery } from '@tanstack/react-query';
import TodoItem from '@/todo/components/TodoItem';
import { findTodos } from '@/api/todos';

const TodoList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["todos"],
    queryFn: findTodos,
  })

  if (isLoading) return <h2>Loading...</h2>

  if (data) {
    if (data.length === 0) 
    return <h1>You don't have any work pending!!!</h1>

    return (
      <ul className='p-2 flex flex-col gap-6'>
        { data.map( t => <li key={t.id}><TodoItem todo={t} /></li> ) }
      </ul>
    )
  }
}

export default TodoList