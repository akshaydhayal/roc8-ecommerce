"use client"

// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userState } from "~/store/userState";

export default function HomePage() {
  const userAuthStatus=useRecoilValue(userState);
  console.log('userAuthStatus : ',userAuthStatus);
  const router=useRouter();
  return (
    <div>
      {router.push("/login")}
      {/* Home Page */}
      {/* {userAuthStatus?router.push("/interests"):router.push("/signup")}   */}
    </div>
  );
}
