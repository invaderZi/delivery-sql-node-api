const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/User");
const Pedido = require("../models/Pedido");
const Produto = require("../models/Produto");

const connection = new Sequelize(dbConfig);

User.init(connection);
Produto.init(connection);
Pedido.init(connection);
Pedido.associate(connection.models);
module.exports = connection;
