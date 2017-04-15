import axios from 'axios'

const baseUrl = 'http://localhost:52987';

let nextTodoId = 9999
export const addTodo = (text) => {
let data;
axios.post(baseUrl + '/api/todoes', {
  Title: text,
  UserId: 1,
  Done: false,
})
  .then(function (response) {
    console.log(response);
    data = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false,
    text
  }
}
export const apiAddTodo = (todoObj) => {
  return {
    type: 'ADD_TODO',
    id: todoObj.Id,
    text: todoObj.Title,
    completed: todoObj.Done,
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