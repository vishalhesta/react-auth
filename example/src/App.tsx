import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
// import NotFound from './NotFound';
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

				{/* <Route exact={true} path="*" element={<NotFound />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
