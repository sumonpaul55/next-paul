"use client";
import React, { ReactNode, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle function to open/close sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-[calc(100vh-48px)]">
            <div className="h-full flex flex-col md:flex-row">
                {/* Toggle button for small screens */}
                <div className={`md:hidden p-3 bg-gray-800 rounded-full size-11 flex justify-center items-center fixed top-2 bg-opacity-70 z-50 ${isSidebarOpen ? "right-2" : "left-2"}`}>
                    <button onClick={toggleSidebar}
                        className="text-xl  text-white focus:outline-none">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                {/* Sidebar */}
                <div className={`bg-gray-200 border-r-2 border-gray-400 w-[350px] p-3 md:p-6 space-y-6 transition-transform transform fixed md:static top-0 left-0 h-full md:h-auto z-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                    {/* Profile Info */}
                    <div className="flex items-center space-x-4">
                        <FaUserCircle size={50} className="text-gray-400" />
                        <div>
                            <h2 className="text-lg font-semibold">Sumon Paul</h2>
                            <p className="text-sm text-gray-400">Web Developer</p>
                        </div>
                    </div>

                    <ul className="space-y-2">
                        <li className="cursor-pointer bg-gray-300 bg-opacity-60 p-2 rounded font-semibold font-sans">Dashboard</li>
                        <li className="cursor-pointer bg-gray-300 bg-opacity-60 p-2 rounded font-semibold font-sans">Settings</li>
                        <li className="cursor-pointer bg-gray-300 bg-opacity-60 p-2 rounded font-semibold font-sans">Profile</li>
                        <li className="cursor-pointer bg-gray-300 bg-opacity-60 p-2 rounded font-semibold font-sans">Logout</li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="bg-white w-full md:flex-1 p-3 md:p-6 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
