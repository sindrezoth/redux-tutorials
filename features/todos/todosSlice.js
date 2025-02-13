const initialState = [
  { id: 0, text: 'Learn Redux', completed: true },
  { id: 1, text: 'Write Redux App', completed: false, color: 'blue' },
  { id: 2, text: 'Build myself!!!', completed: false, color: 'purple' },
];

function nextTodoId(todos) {
  const maxId = todos.length ? Math.max(...todos.map(({ id }) => id)) : 0;
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch(action.type){
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if(todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    case 'todos/todoColorPicked': {
      return state.map(todo => {
        if(todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          color: action.payload.color
        }
      })
    }
    case 'todos/todoDeleted': {
      if(action.payload === 'all') return state.filter(todo => !todo.completed);

      return state.filter(todo => todo.id !== action.payload );
    }
    case 'todos/todoAllCompleted': {
      return state.map(todo => {
        return {
          ...todo,
          completed: true
        }
      })
    }
    default:
      return state;
  }
}
