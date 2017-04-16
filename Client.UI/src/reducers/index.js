import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import user from './login'
import todoTypes from './todoTypes'


const todoApp = combineReducers({
  user,
  todos,
  todoTypes,
  visibilityFilter
})

export default todoApp