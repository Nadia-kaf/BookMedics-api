import { Router } from "express";

import { addAppointment, deleteAppointment, getAllAppointments, getAppointment, updateAppointment } from "../controllers/booking_controller.js";
import { addProfile, deleteProfile, getAllProfiles, getProfile, updateProfile } from "../controllers/healthp_controller.js";
import { addReview, deleteReview, getAllReviews, getReview, updateReview } from "../controllers/reviews_controller.js";
import { createHealthUser, deleteHealthUser, getAllHealthUsers, getHealthUser, updateHealthUser } from "../controllers/healthUser_controller.js";
import { loginUser, signupUser } from "../controllers/user_controller.js";


export const router = Router ();

router.post('/user/signup', signupUser);
router.get('/user/login', loginUser);



router.post('/appointment', addAppointment);
router.get('/appointment', getAllAppointments);
router.get('/appointment/:id', getAppointment);
router.delete('/appointment/:id', deleteAppointment);
router.patch('/appointment/:id', updateAppointment);



router.post('/profile', addProfile);
router.get('/profile', getAllProfiles);
router.get('/profile/:id', getProfile);
router.delete('/profile/:id', deleteProfile);
router.patch('/profile/:id', updateProfile);


router.post('/review', addReview);
router.get('/review', getAllReviews);
router.get('/review/:id', getReview);
router.delete('/review/:id', deleteReview);
router.patch('/review/:id', updateReview);



router.post('/healthprofessional', createHealthUser);
router.get('/healthprofessional', getAllHealthUsers);
router.get('/healthprofessional/:id', getHealthUser);
router.patch('/healthprofessional/:id', updateHealthUser);
router.delete('/healthprofessional/:id', deleteHealthUser);


export default router;