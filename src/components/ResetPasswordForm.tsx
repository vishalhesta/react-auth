import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput';
import axios from 'axios';
import { apiEffectError, apiEffectSuccess } from '../errorHandler';
import { ToastContainer } from "react-toastify";

const url = `http://localhost:8080/api/v1/auth/login`

const ResetPasswordForm = (props: any) => {
	const {
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting, errors },
	} = useForm({ mode: 'onChange' });


	const onSubmit = (values: any) => {
		axios.post(url, values)
			.then((response: any) => {
				apiEffectSuccess(response.data)
				reset({
					password: "",
					confirm_password: ""
				})
				props.onSuccess()
			}).catch((err) => {
				apiEffectError(err.response.data)
			})
	}

	return (
		<div>
			<form onSubmit={handleSubmit((values) => onSubmit(values))}>
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
				<Controller
					name="confirm_password"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="password"
							placeholder="Enter Your Confirm Password"
							errors={errors}
						/>
					)}
					rules={{ required: 'Password is confirm required.' }}
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

export default ResetPasswordForm;