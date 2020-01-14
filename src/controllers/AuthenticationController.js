import User from '../models/User';
import { get } from 'https';
const bcrypt = require('bcryptjs');



export function validateUser(user){
    const validateEmail = typeof user.email == 'string' && user.email.trim() != '';
    const validatePassword = typeof user.password == 'string' && user.password.trim() != ''  && user.password.trim().length >= 8;
    return validateEmail && validatePassword;
}


export  async function createUser(req,res){
    console.log("hij");
    try{
   //if(validateUser(req.body)){
      const user = await User.findOne({
          where:{
           email:req.body.email
          }
       });
      console.log(user);
      if(user){
            res.status(400)
              .json({
                message: "email exist"
              })
     
      }else{
            const createUser =    User.create({
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              email:req.body.email,
              password:bcrypt.hashSync(req.body.password,8),
              phone:req.body.phone
          })
          console.log(createUser);
           res.status(200)
              .json({
                message: "Registration is sucesful",
              
              })
      }
      
   }catch(err){
       console.log(err);
   }
}

export async function getUsers(req,res){
    const getUser  = await User.findAll();
    res.json({
        data: getUser
    })
}

export async function getOneUser(res,req){
    const { id } = req.params;
    try{
   const getOne = await User.findOne({
       where:{
           id
       }
   })
   res.json(getOne);
    }catch(e){

    }
};
export async function deleteUser(req,res){
    const {id} = req.params;
    const deleteUser  = await User.delete({
        where:{
            id
        }
    });
    res.json({
        message:"this user has been deleted",
        data: deleteUser
    });
}

export async function updateUser(req,res){
    const {id} = req.params;
    const { firstname, lastname, middlename, phone}  = req.body;
    const updateProjet = User.findAll({
        attributes:[id, firstname, lastname, middlename, phone],
        where:{
            id
        }
    })
    if(updateProjet.length > 0){
        User.forEach(async updateProjet =>{
            await updateProjet.update({
                firstname,
                lastname
            })
        })
    }
    return res.json({
        message:"User updated successfully",
        data: updateProjet
    })

}