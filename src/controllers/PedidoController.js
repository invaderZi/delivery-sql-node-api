const Pedido = require("../models/Pedido");
const User = require("../models/User");
const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "user not find" });
    }

    const pedido = await Pedido.findAll();

    return res.json(pedido);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { produto_id, quantity } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "user not find" });
    }
    const produto = await Produto.findByPk(produto_id);
    if (!produto) {
      return res.status(400).json({ error: "product not find" });
    }
    const preco = await produto.getDataValue("price");
    const total = quantity * preco;

    const pedido = await Pedido.create({
      total_cost: total,
      user_id: user_id,
      produto_id: produto_id,
      quantity: quantity,
    });

    return res.json(pedido);
  },
};
