import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import { userInterestsData } from "~/utils/userInterests";

// export async function GET(req:NextRequest) {
//   for(let i=0; i<userInterestsData.length; i++){
//     const interestsData=await db.interests.create({
//       data:{name:userInterestsData[i]}
//     })
//   }
//   return NextResponse.json({msg:"Created categories in Interests Table" });
// }


//Fetching all interests
export async function GET(req:NextRequest){
  const pageNumber:number=headers().get("pageNo");
  console.log("pageNo : ",pageNumber);
  const interests=await db.interests.findMany({take:6,skip:6*pageNumber});
  return NextResponse.json({interests},{status:201});
}


//adding interest to user's Interest array
export async function POST(req:NextRequest){
  const {email,interestName} = await req.json();
  const userExists=await db.user.findUnique({
    where:{email}
  });
  if(userExists){
    const res=await db.user.update({
      where:{email},
      data:{interests:{
        push:interestName
      }}
    })
    console.log("res : ",res);
    return NextResponse.json({msg:"User Interests updated",res},{status:201});
  }else{
    return NextResponse.json({msg:"User Does not exist!!"},{status:401});
  }
}


//removing interest from user's Interest array
export async function DELETE(req:NextRequest){
  const email=headers().get("email");
  const interestName=headers().get("interestName");
  // const {email,interestName}=await req.json();
  const userExists=await db.user.findUnique({
    where:{email}
  });
  if(userExists){
    const updatedIntersts=userExists.interests.filter(int=>int!=interestName);
    const res=await db.user.update({
      where:{email},
      data:{
        interests:updatedIntersts
      }
    })
    console.log(res);
    return NextResponse.json({msg:"User's interest removed!",res},{status:201});
  }else{
    return NextResponse.json({msg:"User Does not exist!!"},{status:401});
  }
}