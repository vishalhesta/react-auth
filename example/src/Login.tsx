import React from 'react';
import { LoginForm } from 'react-auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate()
	const onSuccess = () => {
		navigate('/')
	}
	return (
		<div className='main'>
			<h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}>React Auth</h1>
			<LoginForm onSuccess={onSuccess} />
			<Link to="/signup">Sign Up</Link>
		</div>
	);
};

export default Login;
