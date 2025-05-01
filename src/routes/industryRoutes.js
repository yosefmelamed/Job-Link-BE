import express from 'express'
import { createIndustry } from '../controllers/industryController.js';

const router = express.Router();

router.post('/', createIndustry)

export default router