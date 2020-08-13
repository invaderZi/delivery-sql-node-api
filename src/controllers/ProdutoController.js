const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    const produto = await Produto.findAll();

    return res.json(produto);
  },
  async store(req, res) {
    const { name, description, price } = req.body;

    const produto = await Produto.create({ name, description, price });

    return res.json(produto);
  },
};
