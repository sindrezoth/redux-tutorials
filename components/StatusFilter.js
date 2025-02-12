import { useDispatch } from 'react-redux';

const StatusFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-filter-status">
      <h4>Filter by Status</h4>
      <ul>
        <li><button onClick={onChange}>All</button></li>
        <li><button onClick={onChange}>Active</button></li>
        <li><button onClick={onChange}>Completed</button></li>
      </ul>
    </div>
  );
};

export default StatusFilter;
