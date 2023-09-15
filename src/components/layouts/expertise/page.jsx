import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js

export default function Expertise() {
  const [selectedOption, setSelectedOption] = useState('Framework');

  const handleLinkClick = (e, option) => {
    e.preventDefault();
    setSelectedOption(option);
  };

  return (
    <div className="mt-12 py-9 flex flex-col justify-center">
      <span className="flex justify-center space-x-4">
        <Link href="#" onClick={(e) => handleLinkClick(e, 'Design')} className="hover:text-[#A28BFF]">
          DESIGN /
        </Link>
        <Link href="#" onClick={(e) => handleLinkClick(e, 'Framework')} className="hover:text-[#A28BFF]">
          FRAMEWORK /
        </Link>
        <Link href="#" onClick={(e) => handleLinkClick(e, 'Video')} className="hover:text-[#A28BFF]">
          VIDEO & PHOTO /
        </Link>
        <Link href="#" onClick={(e) => handleLinkClick(e, 'Digital')} className="hover:text-[#A28BFF]">
          DIGITAL MARKETING
        </Link>
      </span>
      {selectedOption === 'Design' && (
        <div className="flex flex-row mx-auto my-3 justify-center space-x-9">
          <Image src="/Figma logo.png" alt="Figma Logo" height={12} width="auto" />
          <Image src="/adobe-illustrator-logo-free-png.webp" alt="Adobe Illustrator Logo" height={12} width="auto" />
          <Image src="/Canva logo.png" alt="Canva Logo" height={12} width="auto" />
          <Image src="coreldraw-x7-logo-747B0DC253-seeklogo.com.png" alt="CorelDRAW Logo" height={12} width="auto" />
          {/* Render your Figma content here */}
        </div>
      )}
      {selectedOption === 'Framework' && (
        <div className="flex flex-row mx-auto my-3 justify-center space-x-9">
          <Image src="/React logo.png" alt="React Logo" height={12} width="auto" />
          <Image src="/MongoDB_Logo.svg.png" alt="MongoDB Logo" height={12} width="auto" />
          <Image src="/Group.png" alt="Group Logo" height={12} width="auto" />
          <Image src="/next_putih.png" alt="Next.js Logo" height={12} width="auto" />
          <Image src="/logo-with-shadow.png" alt="Logo with Shadow" height={12} width="auto" />
          <Image src="/mysql.png" alt="MySQL Logo" height={12} width="auto" />
          {/* Render your React content here */}
        </div>
      )}
      {selectedOption === 'Video' && (
        <div className="flex flex-row m-4 justify-center space-x-9">
          <Image src="/adobe-premiere logo.png" alt="Adobe Premiere Logo" height={12} width="auto" />
          <Image src="/97f5f4dfe6df84d78caacff68ec63538.png" alt="Image Alt Text" height={12} width="auto" />
          <Image src="/Davinci_Resolve_Studio.png" alt="DaVinci Resolve Studio Logo" height={12} width="auto" />
          <Image src="/Group (1).png" alt="Group Logo" height={12} width="auto" />
          {/* Render your React content here */}
        </div>
      )}
      {selectedOption === 'Digital' && (
        <div className="flex flex-row m-4 justify-center space-x-9">
          <Image src="/Google_Ads_logo.svg.png" alt="Google Ads Logo" height={12} width="auto" />
          <Image src="/Group 32.png" alt="Group 32 Logo" height={6} width="auto" />
          <Image src="/unnamed.webp" alt="Unnamed Logo" height={12} width="auto" />
          {/* Render your React content here */}
        </div>
      )}
    </div>
  );
}
