import { Router } from "express";
import { createUser } from "../controllers/user_controller";


export const router = Router ();

router.post('/create', createUser);