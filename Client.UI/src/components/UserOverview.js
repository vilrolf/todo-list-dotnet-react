import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { Accordion, Panel } from 'react-bootstrap'
import AddTodoForm from './AddTodoForm'
import Register from './Register'
import { Tab, Tabs, Row, Col, Button, Glyphicon } from 'react-bootstrap'
import { addTodo, addUsers, apiAddTodoTypes, apiAddTodos } from '../actions'
import UserPanel from './UserPanel'

class UserOverview extends React.Component {
  constructor(props) {
    super(props);
    if (props.state.users.length === 0) {
      axios.get(baseUrl + '/api/todotypes/').then(response => {
        console.log("todotypes", response.data)
        this.props.dispatch(apiAddTodoTypes(response.data))

      })

      axios.get(baseUrl + '/api/users/').then(response => {
        console.log(response.data)
        this.fetchUserTodoData(response.data)
        this.props.dispatch(addUsers(response.data))
      })
    } // FIRST TIME LOADING USERS


    this.fetchUserTodoData = this.fetchUserTodoData.bind(this);
    this.generateUserPanels = this.generateUserPanels.bind(this);
  }

  fetchUserTodoData(data) {
    for (let i = 0; i < data.length; i++) {
      axios.get(baseUrl + '/api/todoes/' + data[i].Id).then(response => {
        this.props.dispatch(apiAddTodos(response.data))

      })
    }
  }

  generateUserPanels(users) {
    let returnArray = [];
    for (let i = 0; i < users.length; i++) {
      returnArray.push(<UserPanel key={users[i].Id} user={users[i]} todosLength={this.props.state.todos.filter((todo) => todo.UserId === users[i].Id).length} />)
    }
    return returnArray;
  }

  render() {
    const users = this.props.state.users;
    let panels = null;
    if (users.length > 0) {
      panels = this.generateUserPanels(users)
    }

    return (
      <div>
        <Row>
          <Col md={6}>
            <Register admin />
          </Col>
          <Col md={6}>
            <AddTodoForm admin users={users} />
          </Col>
        </Row>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="User overview">
            <h1> Users: {users.length} </h1>
            <Accordion>
              {panels}
            </Accordion></Tab>
          <Tab eventKey={2} title="To Do overview">ToDo Overview</Tab>
          <Tab eventKey={3} title="Tab 3" disabled></Tab>
        </Tabs>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});
export default connect(mapStateToProps)(UserOverview);
