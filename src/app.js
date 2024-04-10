import express, { Router } from "express";
import dotenv from "dotenv";


dotenv.config()
const app =express();

const PORT = process.env.PORT || 8080


app.use(Router);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})