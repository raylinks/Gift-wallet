import Sequelize from 'sequelize';
const CONFIG = require('../config/config');
export const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    port: CONFIG.db_port,
  //   dialectOptions: {
  //     socketPath: ‘’
  // },
  //operatorsAliases: Sequelize.Op,
    //operatorsAliases: false
  });