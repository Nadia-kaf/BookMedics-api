import { reviewModel } from "../models/reviews.js";


export const addReview = async (req, res) =>{
   try {
     const data = req.body
     const addReview= await reviewModel.create(data)
     res.json(addReview);
 } catch(error){
    console.log(error)
 }
}

export const getAllReviews = async (req, res) =>{
   try {
     const getAllReviews= await reviewModel.find({})
     res.json(getAllReviews);
 } catch(error){
    console.log(error)
 }
}


export const getReview = async (req, res) =>{
   try {
     const getReview= await reviewModel.findById(req.params.id)
     res.json(getReview);
 } catch(error){
    console.log(error)
 }
}


export const updateReview = async (req, res) =>{
   try {
     const updateReview= await reviewModel.findByIdAndUpdate(req.params._id, req.body)
     res.json(updateReview);
 } catch(error){
    console.log(error)
 }
}

export const deleteReview = async (req, res) =>{
   try {
     const deleteReview= await reviewModel.findByIdAndDelete(req.params.id)
     res.json(deleteReview);
 } catch(error){
    console.log(error)
 }
}