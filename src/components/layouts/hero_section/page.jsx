import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero_section = () => {
  return (
    <div className="  flex flex-row justify-between mt-30 mx-56">
      <div classname="  mt-24 align-middle">
        <div className="flex flex-col justify-center ml-10 mt-40">
          <h3 className="font-plus-jakarta-sans text-xl">Dede Sudiahna</h3>
          <h1 className="font-plus-jakarta-sans  font-bold text-7xl">
            WEB DEVELOPER
          </h1>
          <h1 className="font-plus-jakarta-sans text-4xl">PORTFOLIO</h1>
        </div>
        <div className="">
          <button className="ml-10 mr-2 border border-2 hover:bg-slate-700 w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            DIGITAL MARKETING
          </button>
          <button className="mx-2 border border-2 hover:bg-slate-700 w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            WEBSITE
          </button>
          <button className="mx-2 border border-2 hover:bg-slate-700 w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans">
            VIDEO/PHOTO
          </button>
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
      <div>
        <img src="/photo_2023-02-21_23-06-24 2.png" className="  w-3/4 " />
      </div>
    </div>
  );
};

export default Hero_section;
