import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) { 
      super(props);
  }
  render(){
      return(null)
  }
}

const mapStateToProps = (state) => ({
  state: state
});
export default connect(mapStateToProps)(App);
