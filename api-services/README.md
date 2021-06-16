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
	port: <YOUR_PORT>, // 8002
	dbConnectionString: '<YOUR CONNECTIONS URL POSTGRES>', // 'postgres://postgres:postgres@127.0.0.1:5432/credibook'
    API_URL_AUTH: '<API URL AUTH>', //'http://localhost:8001'
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

### Endpoint
* /api/transactions/create
* /api/transactions/get-all
* /api/transactions/get-detail
* /api/transactions/update
* /api/transactions/delete