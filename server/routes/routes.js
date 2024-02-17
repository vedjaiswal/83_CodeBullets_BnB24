import express from  'express';

import {userLogIn,userSignUp} from '../controller/userController.js';

const router = express.Router();    

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

export default router;