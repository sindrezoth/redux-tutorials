const StatusFilter = ({ value, onChange }) => {
  return (
    <div className="todo-filter-status">
      <h4>Filter by Status</h4>
      <ul>
        <li><button className={value === 'All' && 'current'} onClick={onChange}>All</button></li>
        <li><button className={value === 'Active' && 'current'} onClick={onChange}>Active</button></li>
        <li><button className={value === 'Completed' && 'current'} onClick={onChange}>Completed</button></li>
      </ul>
    </div>
  );
};

export default StatusFilter;
