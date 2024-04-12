import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const healthUserSchema = new schema({
   profession:{type: String, required:true},
   email:{type: String, required:true},
   password:{type: String, required:true}
});

export const healthUserModel = mongoose.model('healthUser', healthUserSchema)