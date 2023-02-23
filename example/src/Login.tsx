import React from 'react';
import useProvider, { LoginForm } from 'react-auth';
import { Link } from 'react-router-dom';


const Login = () => {

	const { loginWithEmailProvider } = useProvider()

	loginWithEmailProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "email", type: "text", placeholder: "Enter Your Email" }, { name: "password", type: "password", placeholder: "Enter Your Password" }]
	})

	return (
		<div className='main'>
			<h1>React Auth</h1>
			<LoginForm />
			<Link to="/signup">Sign Up</Link>
		</div>
	);
};

export default Login;
