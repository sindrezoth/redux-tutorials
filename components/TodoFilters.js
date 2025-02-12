import { useSelector, useDispatch } from 'react-redux';

import RemainingTodos from './RemainingTodos.js';
import StatusFilter from './StatusFilter.js';
import ColorFilters from './ColorFilters.js';
import { availableColors, capitalize } from '../features/filters/colors.js';
import { StatusFilters } from '../features/filters/filterSlice.js';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed);
    return uncompletedTodos.length;
  });

  const { status, colors } = useSelector(state => state.filters);

  const onStatusChange = e => {
    dispatch({type: 'filters/statusFilterChanged', payload: e.target.innerText});
  }

  const onColorChange = e => {
    console.log(e.target.name);
    dispatch({type: 'filters/colorFilterChanged', payload: { color: e.target.name, changeType: e.target.checked ? 'Add' : 'Delete' }});
  }

  return (
      <section className="todo-filters">
        <div className="todo-actions">
          <h4>Actions</h4>
          <button>Mark All Completed</button>
          <button>Clear Completed</button>
        </div>
        <RemainingTodos count={ todosRemaining } />
        <StatusFilter value={ status } onChange={ onStatusChange } />
        <ColorFilters value={ colors } onChange={ onColorChange } />
      </section>
  )
}

export default TodoFilters;
