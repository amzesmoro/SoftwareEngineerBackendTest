## Configuration
File directory:

```diff
    -- api
    -- config
    -- -- config.js
    -- app.js
    -- package.json
    -- README.md
    -- sequelize.js
    -- server.js
```

Example configuration. Add file '.js' with name: **config.js** to folder config.
```diff
module.exports = {
	port: <YOUR_PORT>, // 8001
	dbConnectionString: '<YOUR CONNECTIONS URL POSTGRES>', // 'postgres://postgres:postgres@127.0.0.1:5432/credibook'
	JWT_KEY: '<YOUR JWT KEY>', // '<api_credibook_test>'
	JWT_TOKENLIFE: '<YOUR JWT TOKEN LIFE>', // '3h'
	JWT_refreshTokenLife: <YOUR REFRESH TOKEN LIFE>> // 86400
}
```

### Get Package
```diff
    npm install
```

### Running
```diff
    npm run start
```

In this project, using JSON WEB TOKEN (jwt) to secure the app. If you wanna try on Postman, first do login. To access the endpoint, you must enter the token on **Auth** tab, select **Bearer Token** as a type, then fill the token field.

### Endpoint
* /login --> only user has been registered can login
* /check-token --> check token 
* /logout --> user do logout
* /get-roles --> only admin can access
* /create-user --> only admin can access
* /get-all-users --> only admin can access
* /detail-user --> only admin can access and user with the same id
* /delete-user --> only admin can access
