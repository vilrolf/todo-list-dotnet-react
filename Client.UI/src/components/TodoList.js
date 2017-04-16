import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import Todo from './Todo'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const listGroupItems = this.props.todos.map((todo) => <Todo key={todo.Id} todo={todo} />)

    return (
      <div>
        <h3> TODOs </h3>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listGroupItems}
          </tbody>

        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});
export default connect(mapStateToProps)(App);
