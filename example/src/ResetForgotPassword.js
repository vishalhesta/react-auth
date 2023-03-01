import React from 'react';
import useProvider, { ResetPasswordForm } from 'react-auth';

const ResetForgotPassword = () => {
	const { resetPasswordProvider } = useProvider();
	resetPasswordProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "password", type: "password", placeholder: "Enter Your Password" },
		{ name: "confirm_password", type: "password", placeholder: "Enter Your Confirm Password" }]
	})

	const onSuccess = (data) => {
		console.log("On Success", data)
	}

	const onError = (error) => {
		console.log("On Error", error)
	}

	const onSubmit = (values) => {
		console.log("On Submit", values)
	}
	return (
		<div>
			<ResetPasswordForm
				onSuccess={onSuccess}
				onError={onError}
				onSubmit={onSubmit} />
		</div>
	);
}

export default ResetForgotPassword;
