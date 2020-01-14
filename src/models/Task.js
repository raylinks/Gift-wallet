import Sequelize from 'sequelize';
import {sequelize} from  './index'

const Task = sequelize.define('Task',{
    firstname: Sequelize.TEXT,
    lastname: Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING
})
export  { Task};
