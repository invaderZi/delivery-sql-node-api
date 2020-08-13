const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const ProdutoController = require("./controllers/ProdutoController");
const PedidoController = require("./controllers/PedidoController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/products", ProdutoController.store);
routes.get("/products", ProdutoController.index);

routes.post("/users/:user_id/pedidos", PedidoController.store);
routes.get("/users/pedidos", PedidoController.index);

module.exports = routes;
