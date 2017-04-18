import { combineReducers } from 'redux'
import todos from './todos'
import user from './login'
import todoTypes from './todoTypes'
import users from './users'


const todoApp = combineReducers({
  user,
  users,
  todos,
  todoTypes,
})

export default todoApp