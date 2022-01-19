import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    name: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default Product;

