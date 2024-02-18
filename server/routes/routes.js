import express from  'express';

import {userLogIn,userSignUp} from '../controller/userController.js';
import {fetchUser} from '../middleware/fetchUser.js'
import { setAppointment ,getAppointments} from '../controller/appointmentController.js'

const router = express.Router();    

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.post('/setAppointment',fetchUser,setAppointment);
router.get('/getAppointments',fetchUser,getAppointments);

export default router;