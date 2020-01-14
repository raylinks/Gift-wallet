import Sequelize from 'sequelize';
 import {sequelize} from  './index'

const User = sequelize.define('User',{
    firstname: Sequelize.TEXT,
    lastname: Sequelize.STRING,
    email     : {
        type: Sequelize.STRING,
         allowNull: true,
          unique: true, 
            validate: { 
                isEmail: {msg: "Email is  invalid."} }
            },
            password:Sequelize.STRING,
    phone:Sequelize.STRING
})


User.prototype.comparePassword = function(password){
    return bcrypt.compareAsync(password, this.password)
}


export  default User;
