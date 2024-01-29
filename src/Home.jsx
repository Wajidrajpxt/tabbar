import React, { useState } from "react";
import Cate from "./Cate";
import Data from "./Data";







export default function Home() {
   
  const [data,setdata] = useState([Data[0]])
  
  
  const funed = (e)=>{

      const seletedPost = e.target.innerText

    // if (seletedPost === "Intern"){
    //   setdata(Data)
    //   return
    // }

    const newItems = Data.filter((items)=> items.post === seletedPost )
        // console.log(items,'itemsss');
    setdata(newItems) 



  }



  return (
    <>
      <div className=" w-[100%] bg-[blue] ">
        <div className="pt-10">
          <h1 className="text-[56px] text-center text-white  font-bold">EXPERIENCE</h1>
        </div>
        <div className="flex justify-around ">
          <div className=" h-[80vh] w-[45%] bg-[silver] pl-10 flex gap-2 justify-around  items-center flex-col">
            <button onClick={(e)=>funed(e)} className="transition-all h-[70px] w-[200px] text-white font-mono bg-[red] hover:bg-[white] hover:text-[red] text-[25px] ">
              Intern
            </button>
            <button onClick={(e)=>funed(e)} className="font-mono transition-all h-[70px] w-[200px]  text-white  bg-[red] hover:bg-[white] hover:text-[red]  text-[25px] "> 
              Frontend
            </button>
            <button onClick={(e)=>funed(e)} className="h-[70px] transition-all font-mono w-[200px]  text-white  bg-[red] hover:bg-[white] hover:text-[red]  text-[25px]">
              FullStack
            </button>
          </div>

          <div className=" w-[45%] text-[white] pl-10">
            <Cate  data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
