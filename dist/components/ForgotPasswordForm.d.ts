/// <reference types="react" />
interface ForgotPasswordFormProps {
    onSuccess: (params: any) => any;
    onError: (params: any) => any;
    onSubmit?: (params: any) => any;
}
declare const ForgotPasswordForm: (props: ForgotPasswordFormProps) => JSX.Element;
export default ForgotPasswordForm;
