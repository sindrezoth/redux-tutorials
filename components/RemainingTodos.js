const RemainingTodos = ({ count }) => {
  return <div className="todo-remaining">
          <h4>Remaining Todos</h4>
          <p>{ count ? count : 'No' } todo{ count > 1 && 's'} left</p>
        </div>
}

export default RemainingTodos;
