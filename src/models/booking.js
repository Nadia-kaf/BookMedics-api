import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const appointementSchema = new schema({
   name:{type: String, required:true},
   email:{type: String, required:true},
   phone:{type: String, required:true},
   service:{type: String, required:true},
   healthprofessional:{type: String, required:true},
   date:{type: String, required:true},
   time:{type: String, required:true},
   comment:{type: String}
});

export const appointementModel = mongoose.model('bookings', appointementSchema)