import express from 'express'
import { createUser } from '../controllers/userController.js';
//import authenticator - add this later

const router = express.Router();

router.post('/', createUser);

export default router;