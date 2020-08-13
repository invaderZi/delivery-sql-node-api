const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        total_cost: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Produto, { foreignKey: "produto_id", as: "produto" });
  }
}

module.exports = Pedido;
