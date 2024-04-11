import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user_controller";
import { addAppointement, deleteAppointement, getAllAppointements, getAppointement, updateAppointement } from "../controllers/booking_controller";
import { addProfile, deleteProfile, getAllProfiles, getProfile, updateProfile } from "../controllers/healthp_controller";
import { addReview, deleteReview, getAllReviews, getReview, updateReview } from "../controllers/reviews_controller";


export const router = Router ();

router.post('/create', createUser);
router.get('/create', getAllUser);
router.get('/create/:id', getUser);
router.patch('/create/:id', updateUser);
router.delete('/create/:id', deleteUser);


router.post('/appointement', addAppointement);
router.get('/appointement', getAllAppointements);
router.get('/appointement/:id', getAppointement);
router.delete('/appointement/:id', deleteAppointement);
router.patch('/appointement/:id', updateAppointement);



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


