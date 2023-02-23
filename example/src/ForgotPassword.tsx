import React from 'react';
import useProvider, { ForgotPasswordForm } from 'react-auth';

const ForgotPassword = () => {
	const { forgotPasswordProvider } = useProvider()

	forgotPasswordProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "email", type: "text", placeholder: "Enter Your Email" }]
	})
	return (
		<div>
			<ForgotPasswordForm />
		</div>
	);
}

export default ForgotPassword;
