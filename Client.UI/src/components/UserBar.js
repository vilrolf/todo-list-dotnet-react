import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import User from './User'

class UserBar extends React.Component {
    constructor(props) { // .state.user.Id
        super(props);

    }
    render() {
        
        const user = this.props.user;
        const userLoaded = (user.Email != null)
        console.log("USER", userLoaded)
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">TODO ACOS</a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{ height: "0.8px" }}>
                        {userLoaded ? <div className="navbar navbar-right"> <User />  </div> : <div className="navbar-form navbar-right">
                            <Login /> 
                        </div>
                        }

                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(UserBar);
