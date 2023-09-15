import React, { useEffect, useState } from 'react';
import { FaLaptop, FaCamera, FaFilm } from 'react-icons/fa';
import PortoCards from '../porto_cards/page';

export default function Portofolio() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // Initialize with 'ALL'

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:5000/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedCategory]);

  // Function to filter projects based on the selected category
  const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter((project) => project.Categories.includes(selectedCategory));

  return (
    <div>
      <div className="flex flex-col justify-center mx-auto my-20 mt-10">
        <h1 className="text-center font-plus-jakarta-sans text-4xl">PORTFOLIO</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4">
        <button
            className={`border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans ${selectedCategory === 'ALL' ? 'bg-[#A28BFF]' : ''}`}
            onClick={() => setSelectedCategory('ALL')}
          >
            ALL
          </button>

          <button
            className={`border border-2 hover:bg-[#A28BFF] w-auto rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans ${selectedCategory === 'DIGITAL MARKETING' ? 'bg-[#A28BFF]' : ''}`}
            onClick={() => setSelectedCategory('Digital Marketing')}
          >
            <FaLaptop className="inline-block mb-1" /> DIGITAL MARKETING
          </button>

          <button
            className={`text-center border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans ${selectedCategory === 'WEBSITE' ? 'bg-[#A28BFF]' : ''}`}
            onClick={() => setSelectedCategory('Website')}
          >
            <FaCamera className="inline-block mr-2 mb-1 my-auto" /> WEBSITE
          </button>

          <button
            className={`border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans ${selectedCategory === 'VIDEO/PHOTO' ? 'bg-[#A28BFF]' : ''}`}
            onClick={() => setSelectedCategory('Video/Photo')}
          >
            <FaFilm className="inline-block mr-2 mb-1" /> VIDEO/PHOTO
          </button>
          <button
            className={`border border-2 hover:bg-[#A28BFF] w-44 rounded-md h-10 mt-6 px-2 font-plus-jakarta-sans ${selectedCategory === 'DESIGN' ? 'bg-[#A28BFF]' : ''}`}
            onClick={() => setSelectedCategory('Design')}
          >
            <FaFilm className="inline-block mr-2 mb-1" /> DESIGN
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {filteredProjects.map((project) => (
          <PortoCards
            key={project.id}
            Image={project.Image}
            ProjectTitle={project.ProjectTitle}
            Description={project.Description}
            Categories={project.Categories}
            URL={project.URL} // Pass the URL as a prop
          />
        ))}
      </div>
    </div>
  );
}
