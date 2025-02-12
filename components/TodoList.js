import { useSelector, shallowEqual } from 'react-redux';
import TodoItem from './TodoItem';

const selectTodosIds = filters => state => state.todos.filter(todo => 
  (
    (filters.status === 'All')
    || (filters.status === 'Completed' && todo.completed)
    || (filters.status === 'Active' && !todo.completed)
  ) && (
    filters.colors.length && filters.colors.includes(todo.color)
  )).map(todo => todo.id);
const selectFilters = state => state.filters;

const TodoList = () => {
  const filters = useSelector(selectFilters)
  const todoIds = useSelector(selectTodosIds(filters), shallowEqual);

  return (
      <ul>
        {todoIds?.map(todo => <TodoItem id={todo} key={todo}/>)}
      </ul>
  )
}

export default TodoList;
