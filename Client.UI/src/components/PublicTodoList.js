import React from 'react'
import { connect } from 'react-redux'
import { Table, FormControl } from 'react-bootstrap'
import TodoPublic from './TodoPublic'

class PublicTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterStr: '', filterType: -1 }

  }
  render() {
    const makeOption = function (x) { return <option key={x.Id} value={x.Id}> {x.Title} </option> }
    const { filterStr, filterType } = this.state;
    const filteredTodos = this.props.todos.filter(e => (e.Title.includes(filterStr) || e.Description.includes(filterStr)) && (parseInt(filterType) === -1 || parseInt(filterType) === e.TypeId))
    const sortedTodos = filteredTodos.sort(function (a, b) {
      return a.Id < b.Id
    });

    const listGroupItems = sortedTodos.map((todo) => <TodoPublic key={todo.Id} todo={todo} />)

    return (
      <div>
        <div style={{ float: 'right' }}>
          Search:
          <input
            style={{ marginLeft: '2px' }}
            type="text"
            value={filterStr}
            onChange={e => this.setState({ filterStr: e.target.value })} />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>
                <FormControl value={this.state.filterType} onChange={e => this.setState({ filterType: e.target.value })} componentClass="select" placeholder="Type">
                  <option value={-1}>Type</option>
                  {this.props.todoTypes.map(makeOption)}
                </FormControl>
              </th>
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

export default connect()(PublicTodoList);
