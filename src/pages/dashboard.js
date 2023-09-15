import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaEdit, FaUser, FaCog } from "react-icons/fa";
import PortofolioForm from "@/components/layouts/PortofolioForm/page";
import PortofolioTable from "@/components/layouts/PortofolioTable/page";
import Setting from "@/components/layouts/setting/page";
import EditProfile from "@/components/layouts/EditProfile/page";

const Dashboard = () => {
  // Use state to manage which component to render
  const [displayForm, setDisplayForm] = useState(false);
  const [displaySetting, setDisplaySetting] = useState(false); // State for rendering Setting
  const [displayEditProfile, setDisplayEditProfile] = useState(false); // State for rendering EditProfile

  return (
    <div className="flex h-full  ">
      {/* Sidebar */}
      <div className="w-64 bg-[#A28BFF] shadow-lg min-h-max">
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
                setDisplaySetting(false);
                setDisplayEditProfile(false);
              }}
            >
              <FaHome className="inline-block mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(true);
                setDisplaySetting(false);
                setDisplayEditProfile(false);
              }}
            >
              <FaEdit className="inline-block mr-2" /> Post
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <FaUser className="inline-block mr-2" /> Edit Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(true);
                setDisplayEditProfile(false);
              }}
            >
              <FaCog className="inline-block mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 mt-10">
        {displayForm ? (
          <PortofolioForm />
        ) : displaySetting ? (
          <Setting />
        ) : displayEditProfile ? (
          <EditProfile/>
        ) : (
          <PortofolioTable />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
