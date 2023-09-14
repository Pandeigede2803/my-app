import React from 'react';

function PortoCards({ Image, ProjectTitle, Description, Categories,id }) {
  const cardSize = '400px'; // Set the desired width and height here

  const cardStyle = {
    width: cardSize,
    height: cardSize,
  };

  return (
    <div key={id} className="relative mx-10 my-10 bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out" style={cardStyle}>
      {/* Image */}
      <img src={`/images/${Image}`}  alt={ProjectTitle} className="w-full h-full object-cover object-center"  />

      {/* Content (Hidden by Default) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 ease-in-out flex flex-col justify-center p-4">
        {/* Title */}
        <h2 className="text-xl text-center  text-white font-semibold">{ProjectTitle}</h2>

        {/* Description */}
        <p className=" text-white mt-2 text-center">{Description}</p>

        {/* Categories */}
        <div className="mt-4 items-center flex justify-center">
            <span
              className=" bg-white  text-gray-600 text-xs px-2 py-1 rounded-full text-center"
            >
              {Categories}
            </span>
        
        </div>
      </div>
    </div>
  );
}

export default PortoCards;
