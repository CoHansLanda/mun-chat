import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {signUp,signInWithGoogle} from '../helpers/auth';
class SignUp extends Component {
    state = { 
        email:'',
        password:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        signUp(this.state.email,this.state.password);
        console.log(this.state);
        <Redirect to='/chat'/>
    }
    googleSignIn = (e) =>{
        signInWithGoogle();
    }
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" autoComplete="off">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    {/* <div className="input-field">
                        <label htmlFor="Name">Name:</label>
                        <input type="text" name="name" id="name" onChange={this.handleChange} autoComplete="off"/>
                    </div> */}
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleChange} autoComplete="off"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleChange} autoComplete="off"/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>  
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp;
