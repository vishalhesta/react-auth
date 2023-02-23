const useProvider = () => {

	const loginWithEmailProvider = (payload: any) => {
		localStorage.setItem("login_with_email_provider", JSON.stringify(payload))
	}
	const signupWithEmailProvider = (payload: any) => {
		localStorage.setItem("sign_up_with_email_provider", JSON.stringify(payload))
	}
	const forgotPasswordProvider = (payload: any) => {
		localStorage.setItem("forgot_password_provider", JSON.stringify(payload))
	}
	const forgotPasswordVerifyOtpProvider = (payload: any) => {
		localStorage.setItem("forgot_password_verify_otp_provider", JSON.stringify(payload))
	}
	const resetPasswordProvider = (payload: any) => {
		localStorage.setItem("reset_password_provider", JSON.stringify(payload))
	}


	return {
		loginWithEmailProvider,
		signupWithEmailProvider,
		forgotPasswordProvider,
		forgotPasswordVerifyOtpProvider,
		resetPasswordProvider
	}

}

export default useProvider;