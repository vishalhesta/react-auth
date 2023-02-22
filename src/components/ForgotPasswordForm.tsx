import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from './Button';
import TextInput from './TextInput'

const ForgotPasswordForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting, errors },
	} = useForm({ mode: 'onChange' });


	const onSubmit = (values: any) => {
		console.log(values)
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
		</div>
	);
};

export default ForgotPasswordForm;