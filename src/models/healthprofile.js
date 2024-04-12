import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const healthpSchema = new schema({
   name:{type: String, required:true},
   description:{type: String, required:true},
   specialization:{type: String, required:true}
});

export const healthpModel = mongoose.model('healthp', healthpSchema)