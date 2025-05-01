import express from 'express'
import { createCompany } from '../controllers/companyController.js';
//import authenticator - add this later

const router = express.Router();

router.post('/', createCompany);

export default router;