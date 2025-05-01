import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDepartment (req, res){
    const {name} = req.body
    console.log(name, req.body)
    try{
const department = await prisma.department.create({
    data: {name}
});
res.status(201).json(department)
    }catch(error){
res.status(500).json({error:error.message})
    }
}