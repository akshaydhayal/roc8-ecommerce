"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "~/store/userState";

export default function loginPage() {
  const [userEmail,setUserEmail]=useState<string>();
  const [userPassword,setUserPassword]=useState<string>();
  const setUserAuthStatus=useSetRecoilState(userState);
  const router=useRouter();

  async function handleLogin(email:string,password:string){
    try{
      const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/login`,{
        email,password
      },{
        headers:{'Content-Type':'application/json'}
      });
      console.log(response.data);
      if(response.data?.jwtToken){
        setUserAuthStatus(response.data.user);
        localStorage.setItem('jwtToken',response.data.jwtToken);
        router.push("/interests");
      }
    }catch(error){
      console.log("error in login route handler");
      console.log(error.response);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mb-8 mt-10 h-[614px] w-[576px] rounded-2xl border border-[#C1C1C1]">
        <p className="mt-10 text-center text-[32px] font-semibold">LOGIN</p>
        <p className="mt-9 text-center text-2xl font-medium">
          Welcome back to ECOMMERCE
        </p>
        <p className="mb-8 mt-3 text-center text-base font-normal">
          The next gen business marketplace
        </p>

        <div className="flex flex-col gap-8 px-[60px]">
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
          font-medium text-white" onClick={()=>{handleLogin(userEmail,userPassword)}}>
            LOGIN
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          <p className="text-base font-normal text-[#333333]">
            Don’t have an Account?
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-slate-500 hover:underline" onClick={()=>{
            router.push("/signup");
          }}>SIGN UP </p>
        </div>
      </div>
    </div>
  );
}
