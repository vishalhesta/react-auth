import React from 'react';
import useProvider, { ForgotPasswordVerifyOTPForm } from 'react-auth';

const ForgotPasswordVerifyOTP = () => {
	const { forgotPasswordVerifyOtpProvider } = useProvider()

	forgotPasswordVerifyOtpProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "otp", type: "text", placeholder: "Enter Your OTP" }]
	})

	return (
		<div>
			<ForgotPasswordVerifyOTPForm />
		</div>
	);
}

export default ForgotPasswordVerifyOTP;
