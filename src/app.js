import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose  from "mongoose";

dotenv.config()
const app =express();



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


const PORT = process.env.PORT || 8080

const mongoURI =process.env.MONGO_URI


mongoose.connect(mongoURI).then(()=>{
    console.log('Database is connected')
}).catch((error)=> console.log(error))


app.use(Router);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})