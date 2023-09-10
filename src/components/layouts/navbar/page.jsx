import Link from "next/link";
import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Navbar = () => {
    // Create a state variable to track the mobile menu's open/closed state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className=" font-plus-jakarta-sans">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex lg:space-x-40 md:space-x-4 font-plus-jakarta-sans">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="#" className="text-gray-300 hover:border-solid hover:rounded-lg hover:bg-[#A28BFF] hover:text-white px-3 py-2 text-xl font-medium">
                  HOME
                </Link>
                <Link href="#" className="text-gray-300 hover:border-solid hover:rounded-lg hover:bg-[#A28BFF] hover:text-white px-3 py-2 text-xl font-medium">
                  ABOUT
                </Link>
                <Link href="#" className="text-gray-300 hover:border-solid hover:rounded-lg hover:bg-[#A28BFF] hover:text-white px-3 py-2 text-xl font-medium">
                  PROJECTS
                </Link>
                <Link href="#" className="text-gray-300 hover:border-solid hover:rounded-lg hover:bg-[#A28BFF] hover:text-white px-3 py-2 text-xl font-medium">
                  HIRE ME
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
            {/* Profile dropdown */}
           
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
            Dashboard
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Team
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Projects
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


