import { Sequelize } from "sequelize";

const db = new Sequelize("fbjogja_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
