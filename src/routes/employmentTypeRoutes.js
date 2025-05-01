import express from 'express'
import { createEmploymentType } from '../controllers/employmentTypeController.js'

const router = express.Router();

router.post('/', createEmploymentType)

export default router