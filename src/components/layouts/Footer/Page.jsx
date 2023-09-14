import React from 'react';
import { FaInstagram, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Your Company</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaWhatsapp size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
