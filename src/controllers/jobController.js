import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateJobCode(){
    return 'JOB-' + Math.floor(100000 + Math.random() * 900000)
} 

export async function createJob (req, res) {
 const {title, description, location, salaryMin, salaryMax,employmentTypeId, companyId, employerId, industry, department
 } = req.body;
 const userId = req.userId;
 const jobCode = generateJobCode()
console.log(req.body)
 try{
const job = await prisma.job.create({
    data: {
       jobCode, title, description, location, salaryMin, salaryMax,employmentTypeId, employerId, companyId, industry, department
    }
})
res.status(201).json(job);
 }catch(error){
res.status(500).json({error: error.message})
 }
    

}