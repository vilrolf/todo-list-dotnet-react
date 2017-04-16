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
import UserBar from './src/components/UserBar'
import UserOverView from './src/components/UserOverView'


const baseUrl = 'http://localhost:52987';

let store = createStore(todoApp);
store.subscribe(() => {
  console.log("store", store.getState())
})
render(
  <Provider store={store}>
    <Router >
      <div>
        <UserBar />
        {/*<!--<Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={App} />
        <Route path="/Users" component={UserOverView} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)