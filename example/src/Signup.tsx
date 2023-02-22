import React from 'react';
import { SignupForm } from 'react-auth';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
	const navigate = useNavigate()
	const onSuccess = () => {
		navigate('/login')
	}
	return (
		<div className='main'>
			<h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}>React Auth</h1>
			<SignupForm onSuccess={onSuccess} />
			<Link to="/login">Log In</Link>


		</div>
	);
};

export default SignUp;
