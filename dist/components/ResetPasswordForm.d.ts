/// <reference types="react" />
interface ResetPasswordFormProps {
    onSuccess: (params: any) => any;
    onError: (params: any) => any;
    onSubmit?: (params: any) => any;
}
declare const ResetPasswordForm: (props: ResetPasswordFormProps) => JSX.Element;
export default ResetPasswordForm;
