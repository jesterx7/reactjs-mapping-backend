import { Sequelize } from "sequelize";

const db = new Sequelize('mapping', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;