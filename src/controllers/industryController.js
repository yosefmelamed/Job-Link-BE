import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createIndustry (req, res){
    const {name} = req.body
    console.log(name, req.body)
    try{
const industry = await prisma.industry.create({
    data: {name}
});
res.status(201).json(industry)
    }catch(error){
res.status(500).json({error:error.message})
    }
}