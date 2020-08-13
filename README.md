# delivery-sql-node-api
### REST API using postgres node.js for a food delivery app

## Preparing the environment.

## Before you start, make sure you have it up and running:

- Node.js
- NPM or YARN
- Postgres Database

## So, install the dependencies

  npm i

## or

   npm install express pg pg-hstore sequelize sequelize-cli nodemon

## With PgAdmin4 open and connected

## run

npx sequelize db: create

## then

npx sequelize db: migrate


## and finaly

npm start


## now, using postman, nodemon, or directly in pgAdmin4, create the objects:

- users
- products
- pedidos
