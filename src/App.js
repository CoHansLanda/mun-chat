import './App.css';
import React, { Component } from 'react';
import Home from './pages/home';
import Chat from './pages/chat';
import signUp from './pages/signup';
import LogIn from './pages/login';
import Header from './components/header';
import { auth } from './services/firebase';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
	return (
	  <Route
		{...rest}
		render={(props) => authenticated === true
		  ? <Component {...props} />
		  : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
	  />
	)
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
	return (
	<Route
		{...rest}
		render={(props) => authenticated === false
		? <Component {...props} />
		: <Redirect to='/chat' />}
	/>
	)
}



class App extends Component {
	state={
		authenticated:false
	}
	componentDidMount(){
		auth().onAuthStateChanged((user)=>{
			user?(this.setState({
				authenticated:true
			})):(this.setState({
				authenticated:false
			}))
		})
	}
	render() {
		return(
			<Router>
			{/* <Header/> */}
				<Switch>
					<Route exact path='/' component={ Home }/>
					<PrivateRoute path='/chat' authenticated={this.state.authenticated} component={Chat}/>
					<PublicRoute path='/signup' authenticated={this.state.authenticated} component={signUp}/>
					<PublicRoute path='/login' authenticated={this.state.authenticated} component={LogIn}/>

				</Switch>
			</Router>
		)
	}
}





export default App;
