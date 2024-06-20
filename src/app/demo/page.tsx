"use client";
import { useEffect, useState } from "react";

export default function userCategoriesPage() {
  const [pageNo, setPageNo] = useState<number>(1);
  const [skipInterestsCount, setSkipInterestsCount] = useState<number>(0);

  const [demo, setDemo] = useState<string[]>(["ana"]);
  

  useEffect(() => {
    async function getAllInterests() {
      console.log("page nooo : ", pageNo);
      console.log("akshay");
      console.log("demo len : ", demo.length);
      let take = 0;

      if(pageNo*6-demo.length<6){   //incomplete page
        take = pageNo * 6 - demo.length;
      } else if (pageNo * 6 - demo.length >= 6) {//complete page
        take = 6;
      }

      setSkipInterestsCount((old) => {
        console.log("old: ", old);
        console.log("take: ", take);
        console.log("skip: ", old + take);
        return old + take;
      });
    }

    getAllInterests();
  }, [pageNo]);


  console.log("demo: ", demo);
  return (
    <div>
        <p>{skipInterestsCount}</p>
    </div>
  );
}
