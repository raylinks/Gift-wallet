import User from '../models/User';
import { get } from 'https';

export  async function createUser(req,res){
     const { firstname, lastname, email, phone} = req.body;
    console.log(req.body);
    try{
        

        const users = await User.create({
            
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone
    
        }).then((user) => {
            console.log(user);
        });

        if(users){
            res.json({
                message:'User created successfully',
                data: users
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "unable to create",
            error: err
        })
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