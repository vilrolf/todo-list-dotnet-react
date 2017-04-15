import React from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import Register from './Register'
import Login from './Login'

class StartScreen extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);
    }
    render() {
        return (
            <Jumbotron style={{ paddingTop: 50 }}>
                <h1>Hello, this is a simple TODO APP!</h1>
                <p>Made for ACOS</p>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}><h2>Login </h2> <Login /></Col>
                        <Col md={6} mdPull={6}> <h2>Register </h2><Register /></Col>
                    </Row>
                </Grid>
            </Jumbotron>

        )
    }
}

export default connect()(StartScreen);
