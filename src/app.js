import express from 'express'
import cors from 'cors'

import jobRoutes from './routes/jobRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import employmentRoutes from './routes/employmentTypeRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import industryRoutes from './routes/industryRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use('/api/job', jobRoutes)
app.use('/api/company', companyRoutes)
app.use('/api/employmentType', employmentRoutes)
app.use('/api/department', departmentRoutes)
app.use('/api/industry', industryRoutes)
app.use('/api/user', userRoutes)

export default app