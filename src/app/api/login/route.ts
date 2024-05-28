import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import { generateJwtToken } from "~/utils/generateJwtToken";

export async function POST(req:NextRequest){
    const {email,password}=await req.json();
    //check in db user exists or not
    //if exists then return token with sucess msg
    //if not then return error msg

    const user=await db.user.findUnique({
        where:{email,password}
    })
    if(user){
        const jwtToken=generateJwtToken(email);
        return NextResponse.json({msg:"Login Success!!",user,jwtToken},{status:201});
    }
    return NextResponse.json({msg:"Login failed!!"},{status:401});
}