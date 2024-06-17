import { Sequelize, Dialect } from 'sequelize';

// import { initUserModel } from './models/User';
// import { initProductModel } from './models/Product';
// import { initOrderModel } from './models/Order';

import * as constants from '@config/constants';

const dialectOpts = {};

if (process.env.DB_DIALECT === constants.dbDialects.POSTGRES) {
  Object.assign(dialectOpts, { autoJsonMap: false });
}

// const sequelize = new Sequelize({
//   dialect: process.env.DB_DIALECT as Dialect,
//   dialectOptions: dialectOpts,
//   database: process.env.DB_NAME,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT!, 10),
//   logging: false,
//   define: {
//     underscored: true
//   }
// });


const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    dialect: process.env.DB_DIALECT as Dialect,
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: 'true'
      }
    }
  }
);

const db = { sequelize };

export { db as default, sequelize };
