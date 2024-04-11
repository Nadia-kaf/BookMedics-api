import { healthpModel } from "../models/healthp";


export const addProfile = async (req, res) =>{
   try {
     const data = req.body
     const addDetails= await healthpModel.create(data)
     res.json(addDetails);
 } catch(error){
    console.log(error)
 }
}

export const getAllProfiles = async (req, res) =>{
   try {
     const getAllProfiles= await healthpModel.find({})
     res.json(getAllProfiles);
 } catch(error){
    console.log(error)
 }
}


export const getProfile = async (req, res) =>{
   try {
     const getProfile= await healthpModel.findById(req.params.id)
     res.json(getProfile);
 } catch(error){
    console.log(error)
 }
}


export const updateProfile = async (req, res) =>{
   try {
     const updateProfile= await healthpModel.findByIdAndUpdate(req.params._id, req.body)
     res.json(updateProfile);
 } catch(error){
    console.log(error)
 }
}

export const deleteProfile = async (req, res) =>{
   try {
     const deleteProfile= await appointementModel.findByIdAndDelete(req.params.id)
     res.json(deleteProfile);
 } catch(error){
    console.log(error)
 }
}