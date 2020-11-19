import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {logIn,signInWithGoogle} from  '../helpers/auth';
class LogIn extends Component {
    constructor(){
        super();
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    state = { 
        email:null,
        password:'',
        error:''
    }
    handleChange(e){
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    async handleSubmit(e){
        e.preventDefault();
        this.setState({error:''});
        try{
            await logIn(this.state.email,this.state.password);
            console.log("You're logged in");
            console.log(this.state);
            this.sendtoChat();
        }catch(error){
            this.setState({
                error: error.messsage
            });
        }
    }
    async google(){
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({error:error.message})
        }
    }
    sendtoChat(){
        <Redirect to='/chat'/>
    }
    sendtoSignUp(){
        <Redirect to='/signup'/>
    }
    render() { 
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">LOG IN</h5>
                <form onSubmit={this.handleSubmit} className="white" autoComplete="off">
                    <input type="email" name="email" id="email" onChange={this.handleChange} placeholder='Email'/>
                    <input type="password" name="password" id="password" onChange={this.handleChange} placeholder='Password'/>
                    <button className="btn blue lighten-1 z-depth-0 right">Log In</button>
                    <button className="btn blue lighten-1 z-depth-0 left" onClick={this.sendtoSignUp}>Sign Up</button>
                    <div className="container">
                    {this.state.error?(<p className="red-text">{this.state.error}</p>):null}
                    </div>
                </form>
            </div>
        );
    }
}
 
export default LogIn;