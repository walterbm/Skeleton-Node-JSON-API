# Setup Instructions
1. Create a new postgres database (make sure the elephant is running on port `5432`)
  - `createuser --pwprompt postgres`
  - `reatedb -Opostgres -Eutf8 slashquo_api_development`
2. Run the migrations
  - `node_modules/.bin/sequelize db:migrate`
3. Start the server
  - `npm serve`
