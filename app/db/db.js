import Sequelize from "sequelize";
import {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_DIALECT,
} from "./dbConfigs.js";

//instance of sequelize
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT,
  }
);

export default sequelize;
