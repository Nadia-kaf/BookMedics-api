import express from "express";
import { loginUser, signupUser } from "../controllers/user_controller.js";
import { Router } from "express";

const router = Router();

router.post("/users/register",  signupUser);

router.post("/users/login", loginUser);



export default router;