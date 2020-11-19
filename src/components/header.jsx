import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import Chat from '../pages/chat';
function Header(){
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">HOME</Link>
                {auth().currentUser ? (<ul className="right">
                    <li><Link to='/chat' component={Chat}>Chat</Link></li>
                    <li><button className="btn grey darken-3" onClick={()=>auth().signOut()}>Log Out :(</button></li>
                    </ul>):(<ul className="right"><li><Link to='/signup'>Sign Up</Link></li><li><Link to='/login'>Log In</Link></li></ul>)}
            </div>
        </nav>
    )
}
export default Header;