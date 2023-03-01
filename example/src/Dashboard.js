import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate()

	return (
		<div className='main'>
			<h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }}>React Auth</h1>
			<Link to="/signup">Sign Up</Link>
			<Link to="/login">Log In</Link>

		</div>
	);
};

export default Dashboard;
