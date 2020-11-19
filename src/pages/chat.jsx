import React, { Component } from 'react';
import { auth,db } from '../services/firebase';
import logout from '../helpers/auth';
class Chat extends Component {
    state = {
        name:'',
        user: auth().currentUser,
        chats:[],
        content:'',
    }
    componentDidMount(){
        try{
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                chats.push(snap.val());
                });
                this.setState({ chats });
            });
        }catch(error){console.log(error)}
    }
    handleChange = (e) =>{
        this.setState({
            content:e.target.value
        });
    }
    newName = (e) =>{
        e.preventDefault();
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        db.ref("chats").push({
            content:this.state.content,
            timestamp: Date.now(),
            uid:this.state.user.uid,
            name:this.state.name
        });
        this.setState({content:''});
    }
    handleClick(){
        logout();
    }
    render() { 
        return (
            <div>
                <div className="input-field" >
                    <form onSubmit={this.newName}>
                        <input type="text" name="name" id="name" onChange={this.newName}placeholder="Your name?" autoComplete="off"/>
                    </form>
                </div>
                <div className="chats">
                    {this.state.chats.map(chat=>{
                        return <p key={chat.id}>{chat.name}:{chat.content}</p>
                    })}
                </div>
                <div className="input-field">
                    <form onSubmit={this.handleSubmit}>
                        <textarea  onChange={this.handleChange} value={this.state.content} placeholder="Your message!!!!"/>
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Send</button>
                        <button className="btn pink lighten-1 z-depth-0" onClick={()=>auth().signOut()}>Log Out :(</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Chat;