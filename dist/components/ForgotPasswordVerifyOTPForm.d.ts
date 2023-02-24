/// <reference types="react" />
interface ForgotPasswordVerifyOTPFormProps {
    onSuccess: (params: any) => any;
    onError: (params: any) => any;
    onSubmit?: (params: any) => any;
}
declare const ForgotPasswordVerifyOTPForm: (props: ForgotPasswordVerifyOTPFormProps) => JSX.Element;
export default ForgotPasswordVerifyOTPForm;
