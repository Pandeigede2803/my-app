import React from "react";
import Link from "next/link";

export default function HireMePage() {
  // Replace with your contact information
  const contactInfo = {
    name: "Dede Sudiahna",
    email: "Pandegede@gmail.com",
    phoneNumber: "+6281-238-266-915",
    cvDownloadLink: "/path/to/your/cv.pdf", // Replace with the actual path to your CV
  };

  return (
    <div className="min-h-screen  flex flex-col items-start justify-center py-12  sm:px-6 lg:px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <iframe
            src="https://giphy.com/embed/ETzdvyeIuYYvrV4d7V"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>

        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          LETS CREATE SOMETHING GREAT!
        </h2>
      </div>

      <div className="mt-8 mx-auto sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border py-8 px-4 shadow sm:rounded-lg sm:px-10 transition-opacity duration-300 ease-in-out">
          <div className="mb-6">
            <p className="text-xl font-semibold">Contact Information:</p>
            <p className="mt-2">
              <span className="font-medium">Name:</span> {contactInfo.name}
            </p>
            <p className="mt-1">
              <span className="font-medium">Email:</span> {contactInfo.email}
            </p>
            <p className="mt-1">
              <span className="font-medium">Phone Number:</span>{" "}
              {contactInfo.phoneNumber}
            </p>
          </div>

          <div className="mt-6">
            <Link
              href={contactInfo.cvDownloadLink}
              download="your-cv.pdf"
              className="block w-full py-2 px-4 border border-transparent text-center text-sm font-medium rounded-md text-white bg-[#A28BFF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
