import express from "express";

import { getUsers,authUser,getUserProfile,registerUser } from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post('/login',authUser);



router.route('/profile').get(protect,getUserProfile);




router.route('/').get(getUsers);

router.route('/').post(registerUser);







export default router