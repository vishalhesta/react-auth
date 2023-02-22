import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput';
import axios from 'axios';
import { apiEffectError, apiEffectSuccess } from '../errorHandler';
import { ToastContainer } from "react-toastify";

const url = `http://localhost:8080/api/v1/auth/login`

const ForgotPasswordForm = (props: any) => {
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
					email: ""
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

export default ForgotPasswordForm;