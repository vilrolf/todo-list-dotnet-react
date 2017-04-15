import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/reducers'
import App from './src/components/App'
import { addTodo, apiAddTodo } from './src/actions'
import Login from './src/components/Login'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
import BasicExample from './src/BasicExample'


const baseUrl = 'http://localhost:52987';

let store = createStore(todoApp);
store.subscribe(() => {
  console.log("store", store.getState())
})
render(
  <Provider store={store}>
    <Router >
      <div>
        {/*<!--<Route exact path="/" component={Login} /> */}
          <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)