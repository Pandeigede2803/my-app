import React, { useState } from 'react';
import Link from "next/link";

export default function Expertise() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-wrap justify-center">
      <span className=' space-x-4'>
        <Link href="#" onClick={() => setSelectedOption('Design')} className='hover:text-[#A28BFF]'>DESIGN /</Link>
        <Link href="#" onClick={() => setSelectedOption('Framework')} className='hover:text-[#A28BFF]'>FRAMEWORK /</Link>
        <Link href="#" onClick={() => setSelectedOption('Video')} className='hover:text-[#A28BFF]'>VIDEO & PHOTO /</Link>
        <Link href="#" onClick={() => setSelectedOption('Digital')} className='hover:text-[#A28BFF]'>DIGITAL MARKETING</Link>
      </span>
      {selectedOption === 'Design' && (
        <div className="m-4">
          <img src="/Figma logo.png" className='w-5'/>
          {/* Render your Figma content here */}
        </div>
      )}
      {selectedOption === 'Framework' && (
        <div className="m-4">
          <img src="/React logo.png" className='w-5'/>
          {/* Render your React content here */}
        </div>
      )}
    </div>
  );
}

