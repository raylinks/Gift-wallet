import {Task} from  '../models/Task'
import { EEXIST } from 'constants';

// export function createTask(req,res){
//     const {name , done, projectId} = req.body;
//     const task = await Task.create({
//         name,done, projectId
//     },
//     {
//         fields:['name','done', 'projectId']
//     })

//     res.json({
//         message:"task created"
//     })
// };


export  async function createTask(req,res){
    const { firstname, lastname, email, phone} = req.body;
    try{
       console.log("haleluyah");

        const users = await Task.create({
            name: firstname,
            lastname: lastname,
            email: email,
            phone: phone
    
        }).then((user) => {
            console.log(user);
        });

        // if(users){
        //     res.json({
        //         message:'User created successfully',
        //         data: users
        //     })
        // }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "unable to create task",
            error: err
        })
    }
}
export function getTaskByProject(req,res){

}