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

# config database:

## With PgAdmin4 open and connected

### open the file src/config/database

### edit de values of username and password with the credencials you created on the installation of postegres

#### if you dont know your username, the defaut key value is "postgres"

#### the password is defined on the instalation process.

#### for example :

username: "postgres",
password: "admin",

## now, we can create the database ( the database name can also be changed in the file above)

## run

npx sequelize db:create

## then

npx sequelize db:migrate

## and finaly

npm start

## now, using postman, nodemon, or directly in pgAdmin4, create the objects:

- users
- products
- pedidos

## Add values on database (using json on body req)

## POST a user on route > localhost:3333/users

{
"name": " name of user ",
"email": "mail@mail.com",
"adress": " adresss number xx "
}

## POST a product on catalog, route> localhost:3333/products

{
"name": " name of product ",
"description":" description (optional) " ,
"price":999.999
}

## POST a order made by a user by "userid" params, route > localhost:3333/users/"userid"/orders

{
"produto_id": "id_of_product",
"quantity": 99999
}

## Getting the data stored on database

## users :

GET request on localhost:3333/users

## products

GET request on localhost:3333/products

## orders

GET request on localhost:3333/users/orders
