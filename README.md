# React Auth
React Auth provides an authentication management system for ReactJS web applications that is a fully customizable.
## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install github:vishalhesta/react-auth#8ffc70305582ae1d3a44d51086a81c4eb3b594a1 --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add github:vishalhesta/react-auth#8ffc70305582ae1d3a44d51086a81c4eb3b594a1
```

## Features

1) [Log In](#1-loginform)
2) [Sign Up](#2-signupform)
3) [Forgot Password](#3-forgotpasswordform)
4) [Forgot Password Verify Otp](#4-forgotpasswordverifyotpform)
5) [Reset Password](#5-resetpasswordform)

## Examples

#### 1. LoginForm 

```js
import React from 'react';
import useProvider, { LoginForm } from 'react-auth';

const Login = () => {
	const { loginWithEmailProvider } = useProvider()

	loginWithEmailProvider({
	    baseUrl: "http://localhost:8080/api/v1/auth/login",
	    fields: [{
	        name: "email", type: "text"
	    }, 
	    {
	        name: "password", type: "password"
	    }]
	})

	const onSuccess = (data) => {
	    console.log("On Success", data)
	}

	const onError = (error) => {
	    console.log("On Error", error)
	}

	return (
	    <div>
		 <LoginForm
		    onSuccess={onSuccess}
		    onError={onError}
		/>
	    </div>
	);
};

export default Login;
```

#### 2. SignUpForm 

```js
import React from 'react';
import useProvider, { SignupForm } from 'react-auth';

const Signup = () => {
	const { signupWithEmailProvider } = useProvider()

	signupWithEmailProvider({
	    baseUrl: "http://localhost:8080/api/v1/auth/signup",
	    fields: [{
	        name: "name", type: "text"
	    },
	    {
		name:"username", type: "password"
	    },
	    {
	        name: "email", type: "text"
	    }, 
	    {
	        name: "password", type: "password"
	    }]
	})

	const onSuccess = (data) => {
	    console.log("On Success", data)
	}

	const onError = (error) => {
	    console.log("On Error", error)
	}

	return (
	    <div>
		 <SignupForm
		    onSuccess={onSuccess}
		    onError={onError}
		/>
	    </div>
	);
};

export default Signup;
```


#### 3. ForgotPasswordForm 

```js
import React from 'react';
import useProvider, { ForgotPasswordForm } from 'react-auth';

const ForgotPassword = () => {
	const { forgotPasswordProvider } = useProvider()

	forgotPasswordProvider({
	    baseUrl: "http://localhost:8080/api/v1/auth/forgot-password",
	    fields: [{
	        name: "email", type: "text"
	    }]
	})

	const onSuccess = (data) => {
	    console.log("On Success", data)
	}

	const onError = (error) => {
	    console.log("On Error", error)
	}

	return (
	    <div>
		 <ForgotPasswordForm
		    onSuccess={onSuccess}
		    onError={onError}
		/>
	    </div>
	);
};

export default ForgotPassword;
```


#### 4. ForgotPasswordVerifyOTPForm 

```js
import React from 'react';
import useProvider, { ForgotPasswordVerifyOTPForm } from 'react-auth';

const ForgotPasswordVerifyOTP = () => {
	const { forgotPasswordVerifyOtpProvider } = useProvider()

	forgotPasswordVerifyOtpProvider({
	    baseUrl: "http://localhost:8080/api/v1/auth/forgot-password-verify-otp",
	    fields: [{
	        name: "otp", type: "text"
	    }]
	})

	const onSuccess = (data) => {
	    console.log("On Success", data)
	}

	const onError = (error) => {
	    console.log("On Error", error)
	}

	return (
	    <div>
		 <ForgotPasswordVerifyOTPForm
		    onSuccess={onSuccess}
		    onError={onError}
		/>
	    </div>
	);
};

export default ForgotPasswordVerifyOTP;
```



#### 5. ResetPasswordForm 

```js
import React from 'react';
import useProvider, { ResetPasswordForm } from 'react-auth';

const ResetPassword = () => {
	const { resetPasswordProvider } = useProvider()

	resetPasswordProvider({
	    baseUrl: "http://localhost:8080/api/v1/auth/reset-password",
		
	    fields: [{
		name: "password", type: "password"
	    },
	    {
	        name:"confirm_password", type: "password"
	    }]
	})

	const onSuccess = (data) => {
	    console.log("On Success", data)
	}

	const onError = (error) => {
	    console.log("On Error", error)
	}

	return (
	    <div>
		 <ResetPasswordForm
		    onSuccess={onSuccess}
		    onError={onError}
		/>
	    </div>
	);
};

export default ResetPassword;
```

#### Parameters for all providers: 
(Ex:- loginWithEmailProvider, signupWithEmailProvider etc)

|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>string</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### Props for all components: 
(Ex:- LoginForm, SignupForm etc)

|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.