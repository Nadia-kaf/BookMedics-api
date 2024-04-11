import  mongoose  from "mongoose";


const schema = mongoose.Schema;

const appointementSchema = new schema({
   service:{type: String, required:true},
   category:{type: String, required:true},
   date:{type: String, required:true},
   deposit:{type: number, required:true},
   comment:{type: String}
});

export const appointementModel = mongoose.model('bookings', appointementSchema)