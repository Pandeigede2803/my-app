import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

function PortoCards({ Image, ProjectTitle, Description, Categories, id, URL }) {
  const cardSize = "400px"; // Set the desired width and height here

  const cardStyle = {
    width: cardSize,
    height: cardSize,
  };
  // Check if URL is defined and not empty
  const isUrlValid = URL && URL.trim() !== "";

  const openUrlInNewTab = () => {
    // Use window.open to open the URL in a new tab
    if (isUrlValid) {
      window.open(URL, "_blank");
    }
  };
  return (
    <div
      key={id}
      className="relative mx-10 my-10 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
      style={cardStyle}
    >
      {/* Image */}
      <img
        src={`/images/${Image}`}
        alt={ProjectTitle}
        className="w-full h-full object-cover object-center"
      />

      {/* Content (Hidden by Default) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 ease-in-out flex flex-col justify-center p-4">
        {/* Title */}
        <h2 className="text-xl text-center  text-white font-semibold">
          {ProjectTitle}
        </h2>

        {/* Description */}
        <p className="text-white mt-2 text-center">{Description}</p>

        {/* Categories */}
        <div className="mt-4 items-center flex justify-center">
          <span className="bg-white text-gray-600 text-xs px-2 py-1 rounded-full text-center">
            {Categories}
          </span>
        </div>
        {/* Magnifying Glass Icon Button */}
        {isUrlValid && (
          <button
            className=" items-center mx-auto flex flex-col justify-center mt-2 w-fit bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded rounded-2xl"
            onClick={openUrlInNewTab}
          >
            <FaSearch /> {/* Render the FaSearch icon */}
          </button>
        )}
      </div>
    </div>
  );
}

export default PortoCards;
