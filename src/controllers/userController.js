
import { Prisma, PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();


    function generateAccountNumber(){
        return 'ACCT-' + Math.floor(100000 + Math.random() * 900000)
    }  
    
    export async function createUser (req, res) {
     const {
       type, email,   password,    name   } = req.body;
     const accountNumber = generateAccountNumber();
     //const userId = req.userId;
    console.log(req.body)
     try{
    const job = await prisma.user.create({
        data: {
         accountNumber, type,  email, password, name 
        
        }
    })
    res.status(201).json(job);
     }catch(error){
    res.status(500).json({error: error.message})
     }
        
    
    }