const RemainingTodos = ({ count }) => {
  return <div className="todo-remaining">
          <h4>Remaining Todos</h4>
          <p>{ count } item(s) left</p>
        </div>
}

export default RemainingTodos;
