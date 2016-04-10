# Skeleton Node JSON API (with hapi.js)

## About

## Features

## Screenshots

## Setup Instructions
1. Create a new postgres database (make sure the :elephant: is running on port `5432`)
  - `createuser postgres`
  - `createdb -Opostgres -Eutf8 api_development`
2. Run the migrations
  - `npm run db:migrate`
3. Seed the database
  - `npm run db:seed`
4. Set up environment variables
  - create a `.env` file
  - add a `SECRET_KEY`
5. Start the server
  - `npm start`
6. View the API documentation
  - `/documentation`

## Author

## License
