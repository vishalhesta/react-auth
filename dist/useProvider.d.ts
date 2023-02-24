declare const useProvider: () => {
    loginWithEmailProvider: (payload: any) => void;
    signupWithEmailProvider: (payload: any) => void;
    forgotPasswordProvider: (payload: any) => void;
    forgotPasswordVerifyOtpProvider: (payload: any) => void;
    resetPasswordProvider: (payload: any) => void;
};
export default useProvider;
