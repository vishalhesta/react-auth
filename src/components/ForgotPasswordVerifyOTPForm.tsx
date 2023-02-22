import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput'

const ForgotPasswordVerifyOTPForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting, errors },
	} = useForm({ mode: 'onChange' });


	const onSubmit = (value: any) => {
		console.log(value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit((values) => onSubmit(values))}>
				<Controller
					name="otp"
					control={control}
					render={(field) => (
						<TextInput
							{...field}
							type="text"
							placeholder="Enter Your OTP"
							errors={errors}
						/>
					)}
					rules={{ required: 'OTP is required.' }}
				/>
				<Button
					disabled={isSubmitting}
					className="btn btn-secondary"
					type="submit"
				>
					<span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
				</Button>
			</form>
		</div>
	);
};

export default ForgotPasswordVerifyOTPForm;