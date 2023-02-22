import React from 'react';
import { LoginForm } from 'react-auth';
import { Link } from 'react-router-dom';

const Login = () => {
	const onSuccess = () => {
		console.log("Success")
	}
	return (
		<div className='main'>
			<h1>React Auth</h1>
			<LoginForm onSuccess={onSuccess} />
			<Link to="/signup">Sign Up</Link>
		</div>
	);
};

export default Login;
