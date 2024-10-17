"use client"
import React, { ReactNode, useState } from 'react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle function to open/close sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div style={{ height: "95vh" }}>
            <div className='h-full flex flex-col md:flex-row'>
                {/* Toggle button for small screens */}
                <div className="md:hidden p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-2xl text-gray-700 focus:outline-none"
                    >
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`bg-gray-800 text-white w-full md:w-1/4 p-6 space-y-6 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:translate-x-0 fixed md:static top-0 left-0 h-full md:h-auto z-20`}
                >
                    {/* Profile Info */}
                    <div className="flex items-center space-x-4">
                        <FaUserCircle size={50} className="text-gray-400" />
                        <div>
                            <h2 className="text-lg font-semibold">Sumon Paul</h2>
                            <p className="text-sm text-gray-400">Web Developer</p>
                        </div>
                    </div>

                    <ul className="space-y-4">
                        <li className="cursor-pointer hover:text-gray-400">Dashboard</li>
                        <li className="cursor-pointer hover:text-gray-400">Settings</li>
                        <li className="cursor-pointer hover:text-gray-400">Profile</li>
                        <li className="cursor-pointer hover:text-gray-400">Logout</li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="bg-gray-100 w-full md:w-3/4 p-6 ml-0 md:ml-0 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout