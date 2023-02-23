import React from 'react';
import useProvider, { SignupForm } from 'react-auth';
import { Link } from 'react-router-dom';


const SignUp = () => {
	const { signupWithEmailProvider } = useProvider();

	signupWithEmailProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/signup",
		fields: [{ name: "name", type: "text", placeholder: "Enter Your Name" }, { name: "username", type: "text", placeholder: "Enter Your Username" }, { name: "email", type: "text", placeholder: "Enter Your Email" }, { name: "password", type: "password", placeholder: "Enter Your Password" }]
	})

	return (
		<div className='main'>
			<h1 >React Auth</h1>
			<SignupForm />
			<Link to="/login">Log In</Link>


		</div>
	);
};

export default SignUp;
