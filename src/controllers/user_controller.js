import { userModel } from "../models/user"


export const createUser = async (req, res) =>{
   try {
     const data = req.body
     const createUser= await userModel.create(data)
     res.json(createUser);
 } catch(error){
    console.log(error)
 }
}