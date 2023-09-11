import React from 'react'

export default function Portofolio () {
  return (
    <div className="flex flex-col justify-center mx-auto mt-10">
        <h1 className=" text-center font-plus-jakarta-sans text-4xl">PORTOFOLIO</h1>
         <div className="">
         <button className="ml-10 mr-2 border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            ALL
          </button>
            
          <button className="ml-2 mr-2 border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            DIGITAL MARKETING
          </button>
          <button className="mx-2 border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            WEBSITE
          </button>
          <button className="mx-2 border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            VIDEO/PHOTO
          </button>
        </div>
      
    </div>
  )
};
