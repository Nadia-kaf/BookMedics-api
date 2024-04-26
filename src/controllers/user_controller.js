import { userModel } from "../models/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signupUser =  async (req, res) => {
   const salt = bcrypt.genSaltSync(10);
 
   const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
   req.body.password = hashedPassword;
 
   const user = await userModel.create(req.body);
 
   res.status(201).json({ user: user });
 }

  
 export const loginUser= async (req, res) => {
   const user = await userModel.findOne({ email: req.body.email });
 
   console.log(user);
 
   if (user === null) {
     console.log("Error: Invalid credentials");
   }
   const isPasswordMatch = await bcrypt.compare(
     req.body.password,
     user.password
   );
 
   if (isPasswordMatch === false) {
     console.log("Error: Invalid credentials");
   }
 
   const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "30d" });
 
   console.log(token);
 
   // const user = await User.create(req.body);
 
   res.status(201).json({ token: token });
 }

