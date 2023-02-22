import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import { apiEffectError, apiEffectSuccess } from '../errorHandler';



const url = `http://localhost:8080/api/v1/auth/signup`

const SignupForm = (props: any) => {
	const {
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting, errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async (values: any) => {
		axios.post(url, values)
			.then((response: any) => {
				apiEffectSuccess(response.data)
				reset({
					name: "",
					username: "",
					email: "",
					password: ""
				})
				props.onSuccess()
			}).catch((err) => {
				apiEffectError(err.response.data)
			})
	};
	return (
		<div>
			<form onSubmit={handleSubmit((values) => onSubmit(values))}>
				<Controller
					name="name"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="text"
							placeholder="Enter Your Name"
							errors={errors}
						/>
					)}
					rules={{ required: 'Name is required.' }}
				/>

				<Controller
					name="username"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="text"
							placeholder="Enter Your Username"
							errors={errors}
						/>
					)}
					rules={{ required: 'Username is required.' }}
				/>

				<Controller
					name="email"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="text"
							placeholder="Enter Your Email"
							errors={errors}
						/>
					)}
					rules={{ required: 'Email is required.' }}
				/>
				<Controller
					name="password"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="password"
							placeholder="Enter Your Password"
							errors={errors}
						/>
					)}
					rules={{ required: 'Password is required.' }}
				/>
				<Button
					disabled={isSubmitting}
					className="btn btn-secondary"
					type="submit"
				>

					<span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
				</Button>
			</form>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				style={{ zIndex: 9999999 }}
			/>
		</div>
	);
};

export default SignupForm;