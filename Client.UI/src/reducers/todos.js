const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'API_ADD_TODOS':
      return action.todos;
    case 'REMOVE_TODO':
      const index = state.findIndex((t) => t.Id === action.todo.Id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)]
    default:
      return state
  }
}
export default todos