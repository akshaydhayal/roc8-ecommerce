import { db } from './../../../server/db';
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { generateJwtToken } from "~/utils/generateJwtToken";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request, res: Response) {
    const {name,email,password}=await req.json();
    //save the response to a database
    //check if user exist- give response that user already presnt
    //else sace data and give response that user is created and send a jwt token 
    const prisma=new PrismaClient();
    const userExists=await prisma.user.findUnique({
        where:{email}
    });
    console.log('UserExists: ',userExists);
    const jwtToken=generateJwtToken(email);
    if(userExists){
        return NextResponse.json({msg: 'User already Exists!!',"jwtToken":jwtToken},{status:409})
    }
    const user=await prisma.user.create({
        data:{
            name,email,password
        }
    })
    console.log(user);
    return NextResponse.json({msg:"User signed up!!","jwtToken":jwtToken},{status:201});
}

