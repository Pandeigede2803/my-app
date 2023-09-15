import React from "react";

export default function Motivation() {
  return (
    <div className="mt-10 relative w-full h-full overflow-hidden">
      <div
        className=" bg-[#A28BFF] flex flex-col justify-center text-white bg-cover bg-center h-64 md:h-80 lg:h-96"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        // }}
      >
        <h1 className="text-4xl text-center flex justify-center items-center align-middle my-auto">
          &quot;Believe in yourself and all that you are. Know that there is
          something inside you that is greater than any obstacle.&quot;
        </h1>
      </div>
    </div>
  );
}
