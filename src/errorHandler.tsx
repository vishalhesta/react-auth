import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

export const apiEffectError = (props: any) => {
	return toast.error(props?.message || "Something went wrong.", { ...options } as any)
}

export const apiEffectSuccess = (props: any) => {
	console.log("Success ===>>>", props.message)
	return toast.success(props?.message || "Success!", { ...options } as any)
}