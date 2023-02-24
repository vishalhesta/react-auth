/// <reference types="react" />
interface LoginFormProps {
    onSuccess: (params: any) => void;
    onError: (params: any) => void;
    onSubmit?: (params: any) => void;
}
declare const LoginForm: (props: LoginFormProps) => JSX.Element;
export default LoginForm;
