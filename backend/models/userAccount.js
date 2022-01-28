import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define( "account",{
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.TEXT,
    },
    refresh_token: {
        type: DataTypes.TEXT,
    },
}, {
    freezeTableName: true,
  }
);

export default User;

