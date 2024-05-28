"use client"
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "~/store/userState";

export default function Navbar() {
  const [authUserDetails,setAuthUserDetails]=useRecoilState(userState);
  console.log("auth user Details : ",authUserDetails);
  const router=useRouter();
  return (
    <div className="h-[100px] w-screen">
      <div className="flex items-center justify-end gap-5 px-10 py-3">
        <p className="text-xs font-normal">Help</p>
        <p className="text-xs font-normal">Orders and Returns</p>
        {authUserDetails && <p className="text-xs font-normal">
          Hi, {authUserDetails.name}</p>}
        {authUserDetails ? 
        <p className="text-xs font-normal cursor-pointer hover:underline hover:text-slate-600" onClick={()=>{
          setAuthUserDetails(null);
          router.push("/login");
        }}>Logout</p> :
        <p className="text-xs font-normal cursor-pointer hover:underline hover:text-slate-600" onClick={()=>{
          router.push("/login")
        }}>Login</p> 
        }
      </div>
      <div className="flex items-center justify-between px-10">
        <p className="text-[32px] font-bold cursor-pointer" onClick={()=>{
          router.push("/");
        }}>ECOMMERCE</p>
        <div className="flex w-auto gap-8">
          <p className="text-[16px] font-semibold">Categories</p>
          <p className="text-[16px] font-semibold">Sale</p>
          <p className="text-[16px] font-semibold">Clearance</p>
          <p className="text-[16px] font-semibold">New Stock</p>
          <p className="text-[16px] font-semibold">Trending</p>
        </div>
        <div className="flex gap-8">
          <img className="h-8 w-8" src="/Cart.png" />
          <img className="h-8 w-8" src="/Search.png" />
        </div>
      </div>
    </div>
  );
}
