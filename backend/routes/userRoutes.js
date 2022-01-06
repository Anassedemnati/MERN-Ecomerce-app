import express from "express";

import { getUsers,authUser } from '../controllers/userController.js'

const router = express.Router();

router.post('/login',authUser)

router.route('/').get(getUsers)







export default router