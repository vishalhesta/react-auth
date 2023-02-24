import React from 'react';
import useProvider, { SignupForm } from 'react-auth';
import { Link } from 'react-router-dom';


const SignUp = () => {
	const { signupWithEmailProvider } = useProvider();

	signupWithEmailProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/signup",
		fields: [{
			name: "name", type: "text", placeholder: "Enter Your Name", rules: {
				required: "Name is required",
			}
		}, {
			name: "username", type: "text", placeholder: "Enter Your Username", rules: {
				required: "Username is required",
			}
		}, {
			name: "email", type: "text", placeholder: "Enter Your Email", rules: {
				required: "Email is required",
			}
		}, {
			name: "password", type: "password", placeholder: "Enter Your Password", rules: {
				required: "Password is required",
			}
		}]
	})

	const onSuccess = (data: any) => {
		console.log("On Success", data)
	}

	const onError = (error: any) => {
		console.log("On Error", error)
	}

	// const onSubmit = (values: any) => {
	// 	console.log("On Submit", values)
	// }

	return (
		<div className='main'>
			<h1 >React Auth</h1>
			<SignupForm
				onSuccess={onSuccess}
				onError={onError} />
			<Link to="/login">Log In</Link>


		</div>
	);
};

export default SignUp;
