import React, { useState } from 'react';
import Link from "next/link";

export default function Expertise() {
const [selectedOption, setSelectedOption] = useState('Framework');

  return (
    <div className=" mt-12 py-9  flex flex-col justify-center">
      <span className='flex justify-center space-x-4'>
        <Link href="#" onClick={() => setSelectedOption('Design')} className='hover:text-[#A28BFF]'>DESIGN /</Link>
        <Link href="#" onClick={() => setSelectedOption('Framework')} className='hover:text-[#A28BFF]'>FRAMEWORK /</Link>
        <Link href="#" onClick={() => setSelectedOption('Video')} className='hover:text-[#A28BFF]'>VIDEO & PHOTO /</Link>
        <Link href="#" onClick={() => setSelectedOption('Digital')} className='hover:text-[#A28BFF]'>DIGITAL MARKETING</Link>
      </span>
      {selectedOption === 'Design' && (
        <div className="  flex flex-row m-4 justify-center space-x-9">
          <img src="/Figma logo.png" className=' my-auto w-auto h-12'/> 
          <img src="/adobe-illustrator-logo-free-png.webp" className='my-auto w-24 h-auto'/>
          <img src="/Canva logo.png" className=' my-auto w-auto h-20'/>
          {/* Render your Figma content here */}
        </div>
      )}
      {selectedOption === 'Framework' && (
        <div className="flex flex-row mx-auto my-3 justify-center space-x-9">
          <img src="/React logo.png" className=' my-auto w-auto h-12'/>
          <img src="/MongoDB_Logo.svg.png" className=' my-auto w-auto h-12'/>
          <img src="/Group.png" className=' my-auto w-auto h-12'/>
          <img src="/next_putih.png" className=' my-auto w-auto h-12'/>
          <img src="/logo-with-shadow.png" className=' my-auto w-auto h-12'/>
          <img src="/mysql.png" className=' my-auto w-auto h-12'/>
          {/* Render your React content here */}
        </div>
      )}
      {selectedOption === 'Video' && (
        <div className="flex flex-row m-4 justify-center space-x-9">
          <img src="/adobe-premiere logo.png" className='my-auto w-auto h-12'/>
          <img src="/97f5f4dfe6df84d78caacff68ec63538.png" className='my-auto w-auto h-12'/>
          <img src="/Davinci_Resolve_Studio.png" className='my-auto w-auto h-12'/>
          <img src="/Group (1).png" className='my-auto w-auto h-12'/>
          {/* Render your React content here */}
        </div>
      )}
      {selectedOption === 'Digital' && (
        <div className="flex flex-row m-4 justify-center space-x-9">
          <img src="/Google_Ads_logo.svg.png" className='my-auto w-auto h-12'/>
          <img src="/Group 32.png" className='my-auto w-auto h-6'/>
          <img src="/unnamed.webp" className='my-auto w-auto h-12'/>
          {/* Render your React content here */}
        </div>
      )}
    </div>
  );
}

