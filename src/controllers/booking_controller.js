import { appointementModel } from "../models/booking.js";


export const addAppointment = async (req, res) =>{
   try {
     const data = req.body
     const addAppointment= await appointementModel.create(data)
     res.json(addAppointment);
 } catch(error){
    console.log(error)
 }
}

export const getAllAppointments = async (req, res) =>{
   try {
     const getAllAppointments= await appointementModel.find({})
     res.json(getAllAppointments);
 } catch(error){
    console.log(error)
 }
}


export const getAppointment = async (req, res) =>{
   try {
     const getAppointment= await appointementModel.findById(req.params.id)
     res.json(getAppointment);
 } catch(error){
    console.log(error)
 }
}


export const updateAppointment = async (req, res) =>{
   try {
     const updateAppointment= await appointementModel.findByIdAndUpdate(req.params.id, req.body)
     res.json(updateAppointment);
 } catch(error){
    console.log(error)
 }
}

export const deleteAppointment = async (req, res) =>{
   try {
     const deleteAppointment= await appointementModel.findByIdAndDelete(req.params.id)
     res.json(deleteAppointment);
 } catch(error){
    console.log(error)
 }
}