import { Sequelize } from "sequelize";

const sequelize = new Sequelize("railway", "root", "vfA4ypW7tjbjxbZ2HbvL", {
    host: "containers-us-west-83.railway.app",
    dialect: "mysql",
    port: 7434
  });

export default sequelize;
