import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../Constants'
import { Accordion, Panel } from 'react-bootstrap'
import PublicTodoList from './PublicTodoList'

class UserOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], todoTypes: [] }

    axios.get(baseUrl + '/api/todotypes/').then(response => {
      console.log("todotypes", response.data)
      this.setState({ todoTypes: this.state.todoTypes.concat(response.data) })

    })

    axios.get(baseUrl + '/api/users/').then(response => {
      console.log(response.data)
      this.fetchUserTodoData(response.data)
    })
    this.fetchUserTodoData = this.fetchUserTodoData.bind(this);
    this.generateUserPanels = this.generateUserPanels.bind(this);
  }

  fetchUserTodoData(data) {
    for (let i = 0; i < data.length; i++) {
      axios.get(baseUrl + '/api/todoes/' + data[i].Id).then(response => {
        const user = {
          Id: data[i].Id,
          Email: data[i].Email,
          Todos: response.data
        }
        console.log(this.state)
        this.setState({ users: this.state.users.concat([user]) });

      })
    }
  }

  generateUserPanels(users) {
    let returnArray = [];
    for (let i = 0; i < users.length; i++) {
      returnArray.push(<Panel key={users[i].Id} header={users[i].Email + " : " + users[i].Todos.length} eventKey={i}> <PublicTodoList todoTypes={this.state.todoTypes}  todos={users[i].Todos} /> </Panel>)
    }
    return returnArray;
  }

  render() {
    console.log("userOverview", this.state)
    const users = this.state.users;
    let panels = null;
    if (users.length > 0) {
      panels = this.generateUserPanels(users)
    }

    return (
      <div>
        <h1> Users: {users.length} </h1>
        <Accordion>
          {panels}
        </Accordion>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
});
export default connect(mapStateToProps)(UserOverview);
