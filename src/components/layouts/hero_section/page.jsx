import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero_section = () => {
  return (
    <div className="  flex flex-row justify-between mt-30 mx-56">
      <div classname="  mt-24 align-middle">
        <div className=" space-y-5 flex flex-col justify-center ml-10 mt-40">
          <h3 className="font-plus-jakarta-sans text-xl">Dede Sudiahna,</h3>
          <h1 className="font-plus-jakarta-sans  font-bold text-7xl">
            FULL STACK DEVELOPER
          </h1>
          
        </div>
       

        <div>
          <div className=" ml-10 flex flex-row mt-6">
            <a href="https://twitter.com">
              <FaTwitter className="text-2xl hover:text-blue-500 mr-4" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="text-2xl hover:text-blue-500 mr-4" />
            </a>
            <a href="https://github.com">
              <FaGithub className="text-2xl hover:text-gray-600" />
            </a>
          </div>
          {/* create the social media icon here */}
        </div>
      </div>
      <div className="flex flex-col justify-center">
         
      <img src="/Ellip.png" className="ml-10 h-auto mt-22  w-3/4 " />
        <img
          src="/fotodede.png"
          className="absolute w-1/4 top-10 bottom-10 left-50 mt-2 ml-2"
        />
        
       
      </div>
    </div>
  );
};

export default Hero_section;
