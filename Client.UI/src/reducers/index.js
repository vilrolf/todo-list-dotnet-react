import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import user from './login'



const todoApp = combineReducers({
  user,
  todos,
  visibilityFilter
})

export default todoApp