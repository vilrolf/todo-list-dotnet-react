import React from 'react'
import { connect } from 'react-redux'
import UserBar from './UserBar'
import StartScreen from './StartScreen'
import TodoScreen from './TodoScreen'



class App extends React.Component {
  constructor(props) { // .state.user.Id
    super(props);
  }
  render() {
    const userLoaded = (this.props.state.user.Email != null)
    return (
      <div >
        {userLoaded ?
          <TodoScreen />
          :
          <StartScreen />
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  state: state
});
export default connect(mapStateToProps)(App);