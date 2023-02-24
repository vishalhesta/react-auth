import React from 'react';
import useProvider, { ForgotPasswordVerifyOTPForm } from 'react-auth';

const ForgotPasswordVerifyOTP = () => {
	const { forgotPasswordVerifyOtpProvider } = useProvider()

	forgotPasswordVerifyOtpProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "otp", type: "text", placeholder: "Enter Your OTP" }]
	})

	const onSuccess = (data: any) => {
		console.log("On Success", data)
	}

	const onError = (error: any) => {
		console.log("On Error", error)
	}

	const onSubmit = (values: any) => {
		console.log("On Submit", values)
	}

	return (
		<div>
			<ForgotPasswordVerifyOTPForm
				onSuccess={onSuccess}
				onError={onError}
				onSubmit={onSubmit} />
		</div>
	);
}

export default ForgotPasswordVerifyOTP;
