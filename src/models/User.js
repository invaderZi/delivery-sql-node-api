const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        adress: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
