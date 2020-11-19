import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
class HomePage extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <h1 className="grey-text text-darken-3">CHAT APP</h1>
                <Link path='/signup' component={SignUp} className="btn grey lighten-1 z-depth-0">Sign Up</Link>
                <Link path='/login' component={Login}>Log in</Link>
            </div>
        );
    }
}
 
export default HomePage;