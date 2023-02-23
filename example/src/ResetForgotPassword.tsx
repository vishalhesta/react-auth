import React from 'react';
import useProvider, { ResetPasswordForm } from 'react-auth';

const ResetForgotPassword = () => {
	const { resetPasswordProvider } = useProvider();
	resetPasswordProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "password", type: "password", placeholder: "Enter Your Password" },
		{ name: "confirm_password", type: "password", placeholder: "Enter Your Confirm Password" }]
	})
	return (
		<div>
			<ResetPasswordForm />
		</div>
	);
}

export default ResetForgotPassword;
