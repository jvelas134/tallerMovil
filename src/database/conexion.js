import { Sequelize } from "sequelize";

const sequelize = new Sequelize("calendar", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
  });

export default sequelize;