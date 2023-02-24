# React Auth
React Auth provides an authentication management system for ReactJS web applications that is a fully customizable.
## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install github:vishalhesta/react-auth#38dd718c627ecd5bdc0f052187b658df8c919401 --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add github:vishalhesta/react-auth#38dd718c627ecd5bdc0f052187b658df8c919401
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
			name: "email", type: "text", placeholder: "Enter Your Email", rules: {
				required: "Email is required",
			}
		}, {
			name: "password", type: "password", placeholder: "Enter Your Password", rules: {
				required: "Password is required",
			}
		}]
	})

	return (
		<div>
			<LoginForm
				onSuccess={onSuccess}
				onError={onError}
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default Login;
```

#### loginWithEmailProvider Parameters
|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     baseUrl  |     string          |                Required                             |
|     fields   |   Array  of Object  |                Required                             |

#### LoginForm Props
|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     onSuccess  |     function        |                Required                           |
|     onError    |     function        |                Required                           |
|     onSubmit   |     function        |                Optional                           |