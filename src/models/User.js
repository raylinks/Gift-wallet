import Sequelize from 'sequelize';
 import {sequelize} from  './index'

const User = sequelize.define('User',{
    firstname: Sequelize.TEXT,
    lastname: Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING
})
export  default User;
