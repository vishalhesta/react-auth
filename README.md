# React Auth
React Auth provides an authentication management system for ReactJS web applications that is a fully customizable.
## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install github:vishalhesta/react-auth#6dc6f0357e927d698788cf20bd3e9d739c22d222 --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add github:vishalhesta/react-auth#6dc6f0357e927d698788cf20bd3e9d739c22d222
```

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
			name: "email", type: "text", placeholder: "Enter Your Email",label:"Email", rules: {
				required: "Email is required",
			}
		}, {
			name: "password", type: "password", placeholder: "Enter Your Password",label:"Password", rules: {
				required: "Password is required",
			}
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
|     fields   |   Array  of Object  |               Required                   | fields are used for element and there attribute and on the rules key we have to passed key and value pairs for validtion  ex:- {
			name: "email", type: "text", placeholder: "Enter Your Email",label:"Email", rules: {
				required: "Email is required",
			}
		}


#### LoginForm Props
|    Params    |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail