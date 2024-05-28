"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function signupPage() {
  const [userName,setUserName]=useState<string>();
  const [userEmail,setUserEmail]=useState<string>();
  const [userPassword,setUserPassword]=useState<string>();
  const router=useRouter();

  async function handleSignup(name:string,email:string,password:string){
    console.log("signup page");

    // const response=await axios.post("http://localhost:3000/api/signup",{
    //   name,email,password
    // },{
    //   headers: {'Content-Type':"application/json"}
    // });
    // const data=await response.data;

    // console.log(data);

    // if(data.jwtToken){
    //   console.log("entered in");
    //   localStorage.setItem("jwtToken",response.data.jwtToken);
    // }


    try{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/signup`,{
          name,email,password
        },{
          headers: {'Content-Type':"application/json"}
        });
        const data=await response.data;
    
        console.log(data);
    
        if(data.jwtToken){
          console.log("entered in");
          localStorage.setItem("jwtToken",response.data.jwtToken);
        }
      }catch(error){
        console.log("error in signup route handler");
        console.log(error.response);
        if(error.response.data?.jwtToken){
          localStorage.setItem("jwtToken",error.response.data.jwtToken);
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mt-10 mb-8 h-[691px] w-[576px] rounded-2xl border border-[#C1C1C1]">
        <p className="mt-10 mb-8 text-center text-[32px] font-semibold">
          Create your Account
        </p>

        <div className="flex flex-col gap-8 px-[60px]">
          <div className="flex flex-col gap-[7px]">
            <p className="text-base font-normal">Name</p>
            <input
              className="border border-[#C1C1C1] p-[14px] placeholder:text-[#848484]"
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>{setUserName(e.target.value)}}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <p className="text-base font-normal">Email</p>
            <input
              className="border border-[#C1C1C1] p-[14px] placeholder:text-[#848484]"
              type="email"
              placeholder="Enter email"
              onChange={(e)=>{setUserEmail(e.target.value)}}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <p className="text-base font-normal">Password</p>
            <input
              className="border border-[#C1C1C1] p-[14px] placeholder:text-[#848484]"
              type="password"
              placeholder="Enter password"
              onChange={(e)=>{setUserPassword(e.target.value)}}
            />
          </div>
        </div>

        <div className="w-full px-[60px]">
          <button className="mt-10 w-full rounded-lg bg-black px-[147px] py-[18px] text-base 
          font-medium text-white" onClick={()=>{handleSignup(userName,userEmail,userPassword)}}>
            CREATE ACCOUNT
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          <p className="text-base font-normal text-[#333333]">
            Have an Account?{" "}
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-slate-500 hover:underline" onClick={()=>{
            router.push("/login")
          }}>LOGIN </p>
        </div>
      </div>
    </div>
  );
}
