"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "~/store/userState";

export default function userCategoriesPage() {
  const [pageNo, setPageNo] = useState<number>(1);
  const [allInterests, setAllInterests] = useState<string[]>([]);
  const [pageSequence, setPageSequence] = useState<number[]>([1, 2, 3, 4, 5]);

  const [authUserDetails, setAuthUserDetails] = useRecoilState(userState);
  const [userInterests, setUserInterests] = useState<string[]>(
    authUserDetails?.interests,
  );

//   {
//     "id": 1,
//     "name": "Akshay",
//     "email": "a@gmail.com",
//     "password": "akshay",
//     "interests": [
//         "Cooking",
//         "Hiking",
//         "Photography"
//     ]
// }

  useEffect(() => {
    async function getAllInterests() {
      console.log("Fetching interests for pageNo: ", pageNo);
      try {
        let take = 0;
        let skip=0;

        if (pageNo * 6 - userInterests.length < 6) {// Incomplete page
          take = pageNo * 6 - userInterests.length;
          
        } else {// Complete page
          skip=pageNo*6-userInterests.length-6;
          take = 6;
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/interests`,
          {
            headers: {
              pageNo: pageNo,
              email: authUserDetails?.email,
              take: take,
              skip: skip,
            },
          },
        );

        console.log(response.data);

        if (response.data?.interests) {
          setAllInterests(response.data.interests);
        }
      } catch (error) {
        console.log("Error in get User Interests route handler");
        console.log(error.response);
      }
    }

    getAllInterests();
  }, [pageNo, authUserDetails?.email]); // Minimal dependencies

 


  async function addUserInterest(interestName: string) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/interests`,
        {
          email: authUserDetails?.email,
          interestName,
        },
        { headers: { "Content-Type": "application/json" } },
      );
      console.log(response.data);
      if(response.data?.res){
        setAuthUserDetails({...authUserDetails,interests:response.data.res.interests});
        setUserInterests(old=>[...old,interestName])
        setAllInterests((old)=>{
          return old.filter(i=>i!=interestName)
        })
      }
    } catch (error) {
      console.log("error in adding interest route handler");
      console.log(error.response);
    }
  }

  async function removeUserInterest(interestName) {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/interests`,
        {
          headers: {
            email: authUserDetails?.email,
            interestName: interestName,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log("error in removing interest route handler");
      console.log(error.response);
    }
  }

  async function handleSelectInterest(e, interestName: string) {
    console.log(e.target.value);
    console.log("checked : ", e.target.checked);
    if (e.target.checked) {
      // setUserInterests(old=>[...old,interestName]);
      addUserInterest(interestName);
    } else {
      // e.target.setAttribute("checked",false);
      removeUserInterest(interestName);
      setUserInterests((old) => old.filter((i) => i != interestName));
      setAllInterests((old) => [...old, interestName]);
    }
  }

  console.log("user Interests: ", userInterests);
  console.log("all Interests: ", allInterests);
  console.log("user int: ",authUserDetails.interests);

  return (
    <div className="flex justify-center">
      <div className="mt-10 h-[658px] w-[576px] rounded-2xl border border-[#C1C1C1]">
        <p className="mt-10 text-center text-[32px] font-semibold">
          Please mark your interests!
        </p>
        <p className="text-4 mt-6 text-center font-normal">
          We will keep you notified.
        </p>

        <div className="mt-9 px-[60px]">
          <p className="text-xl font-medium">My saved interests!</p>
          <div className="mt-7 flex flex-col gap-6">
            {/* {userInterests && */}
            {(pageNo*6-userInterests.length)<=6 &&
              userInterests.map((userInt, ind) => {
                return (
                  <div className="flex items-center gap-3" key={ind}>
                    <input
                      type="checkbox"
                      className="h-6 w-6 rounded-lg"
                      checked
                      onChange={(e) => {
                        handleSelectInterest(e, userInt);
                      }}
                    />
                    <p className="text-base font-normal">{userInt}</p>
                  </div>
                );
              })}

            {/* {allInterests && allInterests.filter((int)=>{
              if(!userInterests?.includes(int.name)){
                return(
                  <div className="flex items-center gap-3" key={int.id}>
                    <input type="checkbox" className="h-6 w-6 rounded-lg" onChange={(e)=>{
                      handleSelectInterest(e,int.name);
                    }}/>
                    <p className="text-base font-normal">{int?.name}</p>
                  </div>
                )
              }
            })} */}

            {allInterests &&
              allInterests.map((int) => {
                return (
                  <div className="flex items-center gap-3" key={int.id}>
                    <input
                      type="checkbox"
                      className="h-6 w-6 rounded-lg"
                      onChange={(e) => {
                        handleSelectInterest(e, int.name);
                      }}
                    />
                    <p className="text-base font-normal">{int?.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* <p className="text-center text-xl font-medium text-[#ACACAC] mt-16">
          1   2   3   4<span className="text-black">5</span> 6 7 ...
        </p> */}

        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <p
              className="cursor-pointer"
              onClick={() => {
                setPageSequence((old) => {
                  if (old.length > 0 && old[0] > 1) {
                    return old.map((i) => i - 1);
                  } else {
                    return old;
                  }
                });
              }}
            >
              {"<<"}
            </p>

            {pageSequence &&
              pageSequence.map((p, ind) => {
                return (
                  <p
                    className={`cursor-pointer text-base font-normal text-slate-500 hover:font-medium hover:text-black 
              ${p - 1 == pageNo ? "text-black" : "text-slate-400"}`}
                    key={ind}
                    onClick={() => {
                      setPageNo(p);
                      // setPageNo(p-1);
                    }}
                  >
                    {p}
                  </p>
                );
              })}
            <p
              className="cursor-pointer"
              onClick={() => {
                setPageSequence((old) => {
                  if (old.length > 0 && old[old.length - 1] < 17) {
                    return old.map((i) => i + 1);
                  } else {
                    return old;
                  }
                });
              }}
            >
              {">>"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
