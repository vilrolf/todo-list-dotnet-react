import React from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { removeTodo, changeTodo } from '../actions'

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.markAsDone = this.markAsDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  /*

  */
  markAsDone() {
    const todo = this.props.todo
    axios.put(baseUrl + '/api/todoes/' + todo.Id, {
      Description: todo.Description,
      Done: !todo.Done,
      Title: todo.Title,
      TypeId: todo.TypeId,
      UserId: todo.UserId,
      Id: todo.Id

    }).then((response) => {
      this.props.dispatch(changeTodo(response.data))
    })
      .catch(function (error) {
        console.log(error);

      });
  }
  deleteTodo() {
    axios.delete(baseUrl + '/api/todoes/' + this.props.todo.Id).then((response) => {
      console.log(response);
      this.props.dispatch(removeTodo(response.data))

    })
      .catch((error) => {
        console.log(error);

      });
  }

  render() {
    const todo = this.props.todo;
    const type = (todo.Type === null) ? '' : todo.Type.Title;
    let trStyle = {};
    let buttonGlyph = "ok";
    if (todo.Done) {
      trStyle = { backgroundColor: '#dff0d8' }
      buttonGlyph = "minus";
    }

    const style = (todo.Done) ? { backgroundColor: '#dff0d8' } : {}
    return (
      <tr style={trStyle}>
        <td> <Button onClick={this.markAsDone} bsStyle="success"> <Glyphicon glyph={buttonGlyph} /> </Button> </td>
        <td> {todo.Title} </td>
        <td> {todo.Description} </td>
        <td> {type} </td>
        <td> <Button onClick={this.deleteTodo} bsStyle="danger"> <Glyphicon glyph="remove" /> </Button> </td>
      </tr>
    )
  }
}
export default connect()(Todo);
