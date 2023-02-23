import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput';
import axios from 'axios';
import { apiEffectError, apiEffectSuccess } from '../errorHandler';
import { ToastContainer } from "react-toastify";


const ForgotPasswordVerifyOTPForm = (props: any) => {
	const [data, setData] = useState({}) as any

	const {
		handleSubmit,
		register,
		reset,
		control,
		formState: { isSubmitting, errors },
	} = useForm({ mode: 'onChange' });


	useEffect(() => {
		let value = JSON.parse(localStorage.getItem("forgot_password_verify_otp_provider") || '{}') as any
		setData(value)
	}, [])

	const onSubmit = (values: any) => {
		axios.post(data?.baseUrl, values)
			.then((response: any) => {
				apiEffectSuccess(response.data)
				reset({
					text: ""
				})
				props.onSuccess()
			}).catch((err) => {
				apiEffectError(err.response.data)
			})
	}

	return (
		<div>
			<form onSubmit={handleSubmit((values) => onSubmit(values))}>
				{
					data?.fields?.map((i: any) => {
						return <Controller
							name={i.name}
							control={control}
							render={(field) => (
								<TextInput
									{...field}
									type={i.type}
									placeholder={i.placeholder}
									errors={errors}
									{...register(`${i.name}`)}
								/>
							)}
							rules={{ required: `${i.name} is required.` }}
						/>
					})
				}
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

export default ForgotPasswordVerifyOTPForm;