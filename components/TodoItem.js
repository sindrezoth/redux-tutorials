import { useSelector, useDispatch } from 'react-redux';

import { availableColors, capitalize } from '../features/filters/colors.js'

const selectTodoById = ( state, todoId ) => {
  return state.todos.find(todo => todo.id === todoId);
}

const TodoItem = ({ id }) => {
  const todo = useSelector(state => selectTodoById(state, id));
  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCompleteChanged = () => {
    dispatch({type: 'todos/todoToggled', payload: todo.id})
  }

  const handleColorChanged = (e) => {
    dispatch({type: 'todos/todoColorPicked', payload: { id: todo.id, color: e.target.value || '' }});
  }

  const handleDelete = () => {
    dispatch({type: 'todos/todoDeleted', payload: todo.id });
  }

  return (
    <li className="todo-item">
      <span className="checkbox">
        <input 
          id={todo.id} 
          type="checkbox" 
          checked={completed && "checked"}
          onChange={handleCompleteChanged}
        />
      </span>
      <label 
        className={`todo-text ${completed && "completed-todo"}`}
        htmlFor={todo.id}
      >
        {text}
      </label>
      <span className="todo-options">
        <select
          value={color || ""}
          onChange={handleColorChanged}
        >
          <option></option>
          { availableColors.map(color => <option>{ color }</option>) }
        </select>
        <button onClick={handleDelete}>X</button>
      </span>
    </li>
  );
}

export default TodoItem;
