import React from "react";

function About_page() {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        <div className="md:w-1/2">
          <img
            src="photo_2023-02-21_23-06-24 2.png" // Replace with your photo URL
            alt="DedeSudiahna"
            className="mx-auto md:ml-auto w-48 h-48  lg:w-96 lg:h-auto rounded-full object-cover object-center bg-[#A28BFF]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className=" text-white mt-4 lg:text-xl">
            I'm a digital marketing and web development professional with a
            passion for creating engaging online experiences. I also have a
            knack for videography, capturing moments and stories through video.
          </p>
          
          {/* Skill Bars */}
          <div className="lg:mx-auto mx-5 mt-8">
            <div className="flex flex-col mb-2">
              <span className="text-white">Design</span>
              <div className="bg-gray-200 h-4 rounded-md">
                <div className="bg-[#A28BFF] w-4/5 h-full rounded-md"></div> {/* Adjust width based on skill level */}
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <span className="text-white">Frontend</span>
              <div className="bg-gray-200 h-4 rounded-md">
                <div className="bg-[#A28BFF] h-full w-3/4 rounded-md"></div> {/* Adjust width based on skill level */}
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <span className="text-white">Backend</span>
              <div className="bg-gray-200 h-4 rounded-md">
                <div className="bg-[#A28BFF]  w-5/6 h-full rounded-md"></div> {/* Adjust width based on skill level */}
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_page;
