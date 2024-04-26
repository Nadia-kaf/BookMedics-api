import { userModel } from "../models/user.js"


export const signupUser = async (req, res) =>{

const {firstName, lastName, email, password} =req.body
   try {
     const user= await userModel.signup(firstName, lastName, email, password)
     res.status(200).json(firstName, lastName, email, password);
 } catch(error){
    res.status(400).json({error: error.message})
 }
}


export const loginUser = async (req, res) =>{

     res.json({mssg: 'login user'});
 
}

