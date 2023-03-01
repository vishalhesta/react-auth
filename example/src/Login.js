import React from 'react';
import useProvider, { LoginForm } from 'react-auth';
import { Link } from 'react-router-dom';


const Login = () => {

	const { loginWithEmailProvider } = useProvider()

	loginWithEmailProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{
			name: "email", type: "text", placeholder: "Enter Your Email", rules: {
				required: "Email is required",
			}
		}, {
			name: "password", type: "password", placeholder: "Enter Your Password", rules: {
				required: "Password is required",
			}
		}]
	})

	const onSuccess = (data) => {
		console.log("On Success", data)
	}

	const onError = (error) => {
		console.log("On Success", error)
	}

	// const onSubmit = (values) => {
	// 	console.log("On Submit", values)
	// }

	return (
		<div className='main'>
			<h1>React Auth</h1>
			<LoginForm
				onSuccess={onSuccess}
				onError={onError}
			// onSubmit={onSubmit}
			/>
			<Link to="/signup">Sign Up</Link>
		</div>
	);
};

export default Login;
