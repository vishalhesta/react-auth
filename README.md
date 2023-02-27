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
|     fields   |   Array  of Object  |               Required                   | fields are used for html element and there attributes, on the rules key we have to passed key and value pairs for validtion,  <table>  <thead>  <tr>  <th>key</th>  <th>value</th>  <th>default value</th> <th>description</th>  </tr>  </thead>  <tbody>  <tr>  <td>name</td>  <td><code>string</code></td>  <td>required</td> <td><code>Name of the input field.</code></td> </tr>  <tr><td>type</td>  <td><code>string</code></td>  <td>required</td> <td><code>Type of the input field.</code></td></tr>  <tr>  <td>placeholder</td>  <td><code>optional</code></td>  <td>optional</td>  <td><code>Placeholder for the input field.</code></td></tr> <tr> <td>label</td>  <td><code>string</code></td>  <td>optional</td> <td><code>Label of that input field.</code></td></tr>  <tr><td>rules</td>  <td><code>object</code></td>  <td>optional</td> <td><code>They have many key and value pair for the particular inout field validation Ex:-required: string, disabled: boolean, etc. </code></td></tr> </tbody></table> 


#### LoginForm Props
|    Params    |     Value           |                Default Value                        |     Description     |
|:------------:|:-------------------:|:---------------------------------------------------:|:-------------------:|
|     onSuccess  |     function        |                Required                           | Callback on login success
|     onError    |     function        |                Required                           | Callback on login fail
|     onSubmit   |     function        |                Optional                           | If user keeps on their onSubmit functionality.
