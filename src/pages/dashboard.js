import React, { useState } from 'react';
import Link from "next/link";

import PortofolioForm from '@/components/layouts/PortofolioForm/page';
import PortofolioTable from '@/components/layouts/PortofolioTable/page';
import Setting from '@/components/layouts/setting/page';


const Dashboard = () => {
  // Use state to manage which component to render
  const [displayForm, setDisplayForm] = useState(false);
  const [displaySetting, setDisplaySetting] = useState(false); // State for rendering Setting
  const [displayEditProfile, setDisplayEditProfile] = useState(false); // State for rendering EditProfile

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#A28BFF] shadow-lg">
        <div className="p-4 ">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <ul className="mt-4">
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(false); // Hide Setting component
                setDisplayEditProfile(false); // Hide EditProfile component
              }}
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(true);
                setDisplaySetting(false); // Hide Setting component
                setDisplayEditProfile(false); // Hide EditProfile component
              }}
            >
              Post
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Edit Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(true); // Show Setting component
                setDisplayEditProfile(false); // Hide EditProfile component
              }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mt-10">
        {displayForm ? <PortofolioForm /> : displaySetting ? <Setting /> : displayEditProfile ? <EditProfile /> : <PortofolioTable />}
      </div>
    </div>
  );
};

export default Dashboard;
