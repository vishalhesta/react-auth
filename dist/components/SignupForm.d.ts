/// <reference types="react" />
interface SignupFormProps {
    onSuccess: (params: any) => void;
    onError: (params: any) => void;
    onSubmit?: (params: any) => void;
}
declare const SignupForm: (props: SignupFormProps) => JSX.Element;
export default SignupForm;
