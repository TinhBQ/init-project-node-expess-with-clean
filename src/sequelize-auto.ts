import { Dialect } from "sequelize";
import { SequelizeAuto } from "sequelize-auto";

const autoGenDb = new SequelizeAuto(
  process.env.DB_NAME as string,
  'postgres',
  process.env.DB_PASSWORD as string,
  {
    host: 'localhost',
    dialect: process.env.DB_DIALECT as Dialect,
    directory: './src/infrastructure/database/orm/sequelize/models',
    port: parseInt(process.env.DB_PORT!, 10),
    caseModel: 'c',
    caseFile: 'c',
    lang: "ts",
    useDefine: false,
    singularize: true,
    additional: {
      timestamps: false,
    },
  }
);

autoGenDb.run()
