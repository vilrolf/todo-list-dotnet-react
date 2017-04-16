export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}
export const apiAddTodos = (todos) => {
  return {
    type: 'API_ADD_TODOS',
    todos
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const login = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}
export const apiAddTodoTypes = (todoTypes) => {
  return {
    type : 'API_ADD_TODO_TYPES',
    todoTypes
  }
}