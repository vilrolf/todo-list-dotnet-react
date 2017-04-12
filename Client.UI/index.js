import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/reducers'
import App from './src/components/App'
import { addTodo, apiAddTodo } from './src/actions'
import axios from 'axios'

const baseUrl = 'http://localhost:52987';



let store = createStore(todoApp);
axios.get(baseUrl + '/api/todoes').then(response => {
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    store.dispatch(apiAddTodo(response.data[i]))
  }
})

store.dispatch(addTodo('Herre jesus'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)