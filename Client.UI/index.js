import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/reducers'
import App from './src/components/App'
import { addTodo, apiAddTodo } from './src/actions'
import Login from './src/components/Login'
import axios from 'axios'
import { Router, Route } from 'react-router-dom'
import BasicExample from './src/BasicExample'


const baseUrl = 'http://localhost:52987';

let store = createStore(todoApp);

axios.get(baseUrl + '/api/todoes').then(response => {
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    store.dispatch(apiAddTodo(response.data[i]))
  }
})

store.subscribe(() => {
  console.log(store.getState())
})
if (store.user) {
  console.log("USERHAHA")
}
render(
  <Provider store={store}>
    <Router>
      <div>
        <h1> top of page </h1>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)