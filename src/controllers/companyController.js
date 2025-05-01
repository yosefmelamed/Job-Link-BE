import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export async function createCompany (req, res) {
 const {name ,
    description ,
    industry ,
    logoUrl ,
    } = req.body;
 //const userId = req.userId;
console.log(req.body)
 try{
const job = await prisma.company.create({
    data: {
        name ,
    description ,
    industry ,
    logoUrl ,
    
    }
})
res.status(201).json(job);
 }catch(error){
res.status(500).json({error: error.message})
 }
    

}