import { userModel } from "../models/user.js"


export const createUser = async (req, res) =>{
   try {
     const data = req.body
     const createUser= await userModel.create(data)
     res.json(createUser);
 } catch(error){
    console.log(error)
 }
}

export const getAllUser = async (req, res) =>{
   try {
     const getAllUserUser= await userModel.find({})
     res.json(getAllUser);
 } catch(error){
    console.log(error)
 }
}


export const getUser = async (req, res) =>{
   try {
     const getUser= await userModel.findById(req.params.id)
     res.json(getUser);
 } catch(error){
    console.log(error)
 }
}


export const updateUser = async (req, res) =>{
   try {
     const updateUser= await userModel.findByIdAndUpdate(req.params._id, req.body)
     res.json(updateUser);
 } catch(error){
    console.log(error)
 }
}

export const deleteUser = async (req, res) =>{
   try {
     const deleteUser= await userModel.findByIdAndDelete(req.params.id)
     res.json(deleteUser);
 } catch(error){
    console.log(error)
 }
}