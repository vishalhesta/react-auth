import React from 'react';
import { SignupForm } from 'react-auth';
import { Link } from 'react-router-dom';


const SignUp = () => {
	const onSuccess = () => {
		console.log("Success")
	}
	return (
		<div className='main'>
			<h1 >React Auth</h1>
			<SignupForm onSuccess={onSuccess} />
			<Link to="/login">Log In</Link>


		</div>
	);
};

export default SignUp;
