import express from 'express'
import { createJob } from '../controllers/jobController.js';
//import authenticator - add this later

const router = express.Router();

router.post('/', createJob);

export default router;