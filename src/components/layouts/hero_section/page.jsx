import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero_section = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 mx-5 lg:mx-40">
      <div className="lg:w-1/2 mt-5  ml-5  mx-auto   lg:flex lg:flex-col lg:justify-center">
        <div className="space-y-5 lg:top-10">
          <h3 className="font-plus-jakarta-sans text-4xl lg:text-5xl lg:text-left text-center">
            Dede Sudiahna,
          </h3>
          <h1 className="font-plus-jakarta-sans font-bold text-7xl lg:text-left lg:text-7xl xl:text-9xl text-center">
            FULL STACK DEVELOPER
          </h1>
        </div>

        <div className=" lg:ml-0  mt-6">
          <div className="flex flex-row justify-center lg:justify-start">
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
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img src="Group 33.png" className=" w-1/2 mx-auto lg:w-3/4 "/>
      </div>
    </div>
  );
};

export default Hero_section;
