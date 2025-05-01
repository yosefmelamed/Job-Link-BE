import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEmploymentType (req, res){
    const {name} = req.body
    console.log(name, req.body)
    try{
const employmentType = await prisma.employmentType.create({
    data: {name}
});
res.status(201).json(employmentType)
    }catch(error){
res.status(500).json({error:error.message})
    }
}