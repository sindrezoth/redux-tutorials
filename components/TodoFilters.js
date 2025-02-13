import { useSelector, useDispatch } from 'react-redux';

import RemainingTodos from './RemainingTodos.js';
import StatusFilter from './StatusFilter.js';
import ColorFilters from './ColorFilters.js';
import { availableColors, capitalize } from '../features/filters/colors.js';
import { StatusFilters } from '../features/filters/filterSlice.js';

const TodoFilters = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector(state => state.todos.filter(todo => !todo.completed).length);

  const { status, colors } = useSelector(state => state.filters);

  const onStatusChange = e => {
    dispatch({type: 'filters/statusFilterChanged', payload: e.target.innerText});
  }

  const onColorChange = e => {
    if(e.target.name === 'toggle'){
      if(colors.length) {
        colors.forEach(color => {
          dispatch({
            type: 'filters/colorFilterChanged', 
            payload: { color: color, changeType: 'Delete' }
          });
        })
      }
      else {
        availableColors.forEach(color => {
          dispatch({
            type: 'filters/colorFilterChanged', 
            payload: { color: color, changeType: 'Add' }
          });
        })
      }
    }
    else {
      dispatch({
        type: 'filters/colorFilterChanged', 
        payload: { color: e.target.name, changeType: e.target.checked ? 'Add' : 'Delete' }
      });
    }
  }

  const onAllCompletedHandle = () => {
    dispatch({ type: 'todos/todoAllCompleted' });
  }

  const onClearCompletedHandle = () => {
    dispatch({ type: 'todos/todoDeleted', payload: 'all' });
  }

  return (
      <section className="todo-filters">
        <div className="todo-actions">
          <h4>Actions</h4>
          <button onClick={onAllCompletedHandle}>Mark All Completed</button>
          <button onClick={onClearCompletedHandle}>Clear Completed</button>
        </div>
        <RemainingTodos count={ todosRemaining } />
        <StatusFilter value={ status } onChange={ onStatusChange } />
        <ColorFilters value={ colors } onChange={ onColorChange } />
      </section>
  )
}

export default TodoFilters;
