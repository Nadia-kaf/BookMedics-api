import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const reviewSchema = new schema({
   // userID:{type: String, required:true},
   message:{type: String, required:true},
   rating:{type: String},
   createdAt: { type: Date, required: true, default: Date.now },
   updatedAt: { type: Date, required: true, default: Date.now }
});

export const reviewModel = mongoose.model('reviews', reviewSchema)