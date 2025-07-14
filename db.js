import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("sequelize_test", "root", '', {
    host: "localhost",
    dialect: "mysql",
});

