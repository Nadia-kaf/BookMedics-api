import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const reviewSchema = new schema({
   userID:{type: String, required:true},
   message:{type: String, required:true},
   rating:{type: String},
   createdAt:{type: String, required:true},
   updatedAt:{type: String,required:true}
});

export const reviewModel = mongoose.model('reviews', reviewSchema)