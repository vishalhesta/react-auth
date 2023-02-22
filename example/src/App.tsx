import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordVerifyOTP from './ForgotPasswordVerifyOTP';
import ResetForgotPassword from './ResetForgotPassword';



import NotFound from './NotFound';
import Dashboard from './Dashboard';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Dashboard />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/forgot-password"
					element={<ForgotPassword />}
				/>
				<Route
					path="/forgot-password-verify-otp"
					element={<ForgotPasswordVerifyOTP />}
				/>
				<Route
					path="/reset-forgot-password"
					element={<ResetForgotPassword />}
				/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
