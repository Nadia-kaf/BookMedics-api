import { healthUserModel } from "../models/healthprofessional.js";


export const createHealthUser = async (req, res) =>{
   try {
     const data = req.body
     const createHealthUser= await healthUserModel.create(data)
     res.json(createHealthUser);
 } catch(error){
    console.log(error)
 }
}

export const getAllHealthUsers = async (req, res) =>{
   try {
     const getAllHealthUsers= await healthUserModel.find({})
     res.json(getAllHealthUsers);
 } catch(error){
    console.log(error)
 }
}


export const getHealthUser = async (req, res) =>{
   try {
     const getHealthUser= await healthUserModel.findById(req.params.id)
     res.json(getHealthUser);
 } catch(error){
    console.log(error)
 }
}


export const updateHealthUser = async (req, res) =>{
   try {
     const updateHealthUser= await healthUserModel.findByIdAndUpdate(req.params._id, req.body)
     res.json(updateHealthUser);
 } catch(error){
    console.log(error)
 }
}

export const deleteHealthUser = async (req, res) =>{
   try {
     const deleteHealthUser= await healthUserModel.findByIdAndDelete(req.params.id)
     res.json(deleteHealthUser);
 } catch(error){
    console.log(error)
 }
}