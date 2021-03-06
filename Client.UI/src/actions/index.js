export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  }
}
export const removeTodo = (todo) => {
  return {
    type: 'REMOVE_TODO',
    todo
  }
}
export const changeTodo = (todo) => {
  return {
    type: 'CHANGE_TODO',
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
    type: 'API_ADD_TODO_TYPES',
    todoTypes
  }
}
export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const addUsers = (users) => {
  return {
    type: 'ADD_USERS',
    users
  }
}

export const removeUser = (user) => { // This leaves todos with no users. 
  return {
    type: 'REMOVE_USER',
    user
  }
}


