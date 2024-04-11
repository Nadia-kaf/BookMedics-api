import { appointementModel } from "../models/booking";


export const addAppointement = async (req, res) =>{
   try {
     const data = req.body
     const addAppointement= await appointementModel.create(data)
     res.json(addAppointement);
 } catch(error){
    console.log(error)
 }
}

export const getAllAppointements = async (req, res) =>{
   try {
     const getAllAppointements= await appointementModel.find({})
     res.json(getAllAppointements);
 } catch(error){
    console.log(error)
 }
}


export const getAppointement = async (req, res) =>{
   try {
     const getAppointement= await appointementModel.findById(req.params.id)
     res.json(getAppointement);
 } catch(error){
    console.log(error)
 }
}


export const updateAppointement = async (req, res) =>{
   try {
     const updateUser= await appointementModel.findByIdAndUpdate(req.params._id, req.body)
     res.json(updateUser);
 } catch(error){
    console.log(error)
 }
}

export const deleteAppointement = async (req, res) =>{
   try {
     const deleteUser= await appointementModel.findByIdAndDelete(req.params.id)
     res.json(deleteUser);
 } catch(error){
    console.log(error)
 }
}