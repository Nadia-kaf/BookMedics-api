import  mongoose  from "mongoose";
import validator from "validator";

const schema = mongoose.Schema;

const userSchema = new schema({
   fullName:{type: String, required:true},
   email:{type: String, required:true, unique: true
   },
   password:{type: String, min: 8 ,required:true}
});

// //static signup method
// userSchema.statics.signup =async function(email, password){
   
//    // validation
//    if (!email || !password){
//       throw Error ('All fields must be filled')
//    }

//    if (!validator.isEmail(email)){
//       throw Error('Email is not valid')
//    }


//    if (!validator.isStrongPassword(password)){
//       throw Error('Password not strong enough')
//    }

//    const exists = await this.findOne({ email})

//    if (exists){
//       throw Error ('Email already in use')
   
//    }

   //  const salt =await bcrypt.genSalt(10)
   //  const hash =await bcrypt.hash(password, salt)

   //  const user = await this.create({email, password: hash})

   //  return user








export const userModel = mongoose.model('User', userSchema)