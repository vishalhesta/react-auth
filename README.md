# React Auth
React Auth provides an authentication management system for ReactJS web applications that is a fully customizable.

### Node Version

| Version | Supported          |
| ------- | ------------------ |
| node-version >= 16   | :white_check_mark: |
| node-version  < 16  | :x:  |

### Getting Started

```
npm install github:vishalhesta/react-auth#88deb75ac367f3246755760bc926542343e30165
```
				OR
```
yarn add github:vishalhesta/react-auth#88deb75ac367f3246755760bc926542343e30165
```

### Login Form Example

```js
import React from 'react';
import useProvider, { LoginForm } from 'react-auth';

const Login = () => {
	const { loginWithEmailProvider } = useProvider()

	loginWithEmailProvider({
		baseUrl: "http://localhost:8080/api/v1/auth/login",
		fields: [{ name: "email", type: "text", placeholder: "Enter Your Email" }, { name: "password", type: "password", placeholder: "Enter Your Password" }]
	})

	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default Login;
```

## loginWithEmailProvider Parameters
|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     onSuccess  |     function        |                Required                           |
|     onError    |     function        |                Required                           |

## LoginForm Props
|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     onSuccess  |     function        |                Required                           |
|     onError    |     function        |                Required                           |