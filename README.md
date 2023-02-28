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

- Log In
- Sign Up
- Forget Password
- Forget Password Verify Otp
- Reset Password

## Example

#### 1. LoginForm Example

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
	    console.log("On Success", error)
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

#### loginWithEmailProvider Parameters
|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### LoginForm Props
|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.


#### 2. SignUpForm Example

```js
import React from 'react';
import useProvider, { SignupForm } from 'react-auth';

const Signup = () => {
	const { loginWithEmailProvider } = useProvider()

	signupWithEmailProvider({
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
	    console.log("On Success", error)
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

#### signupWithEmailProvider Parameters
|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### SignupForm Props
|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.



#### 3. ResetPasswordForm Example

```js
import React from 'react';
import useProvider, { ResetPasswordForm } from 'react-auth';

const ResetPassword = () => {
	const { resetPasswordProvider } = useProvider()

	resetPasswordProvider({
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
	    console.log("On Success", error)
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

#### resetPasswordProvider Parameters
|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### ResetPasswordForm Props
|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.


#### 4. ForgotPasswordForm Example

```js
import React from 'react';
import useProvider, { ForgotPasswordForm } from 'react-auth';

const ForgotPassword = () => {
	const { forgotPasswordProvider } = useProvider()

	forgotPasswordProvider({
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
	    console.log("On Success", error)
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

#### forgotPasswordProvider Parameters
|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### ForgotPasswordForm Props
|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.


#### 5. ForgotPasswordVerifyOTPForm Example

```js
import React from 'react';
import useProvider, { ForgotPasswordVerifyOTPForm } from 'react-auth';

const ForgotPasswordVerifyOTP = () => {
	const { forgotPasswordVerifyOtpProvider } = useProvider()

	forgotPasswordVerifyOtpProvider({
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
	    console.log("On Success", error)
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

#### forgotPasswordVerifyOtpProvider Parameters
|    Params    |     Value           |              Default Value               |          Description           |
|:------------:|:-------------------:|:----------------------------------------:|:------------------------------:|
|     baseUrl  |     string          |               Required                   | baseUrl to used for Login Api to get the login response.
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### ForgotPasswordVerifyOTPForm Props
|    Props   |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.