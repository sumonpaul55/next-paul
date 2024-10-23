"use client";
import React, { ReactNode, useState } from "react";
import { FaBars, FaFacebookF, FaGithub, FaInstagram, FaTimes, FaUserCircle } from "react-icons/fa";
import { menuBar } from "./menuBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa6";
import { Divider, } from "@nextui-org/react";
import { Tmenu } from "@/src/types";
import { useUser } from "@/src/context/user.provider";
import LoadingSpinner from "../shared/LoadingSpinner";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const { user, isloading } = useUser()
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // Toggle function to open/close sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-[calc(100vh-48px)]">
            <div className="h-full flex flex-col lg:flex-row">
                {/* Toggle button for small screens */}
                {
                    !isSidebarOpen && <div className={`lg:hidden p-3 bg-gray-800 rounded-full size-11 flex justify-center items-center fixed top-2 bg-opacity-70 z-50 ${isSidebarOpen ? "right-2" : "left-2"}`}>
                        <button onClick={toggleSidebar}
                            className="text-xl  text-white focus:outline-none">
                            <FaBars />
                        </button>
                    </div>
                }
                {/* Sidebar */}
                <div className={`bg-gray-50 border-r-1 flex flex-col justify-between border-gray-200 w-[250px] sm:w-[350px] p-3 md:p-6 transition-transform transform fixed lg:static top-0 left-0 h-full lg:h-auto z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

                    {
                        isSidebarOpen && <div className={`lg:hidden p-3 bg-gray-800 rounded-full size-11 flex justify-center items-center fixed top-2 bg-opacity-70 z-50 ${isSidebarOpen ? "right-2" : "left-2"}`}>
                            <button onClick={toggleSidebar}
                                className="text-xl  text-white focus:outline-none">
                                <FaTimes />
                            </button>
                        </div>
                    }
                    {/* Profile Info */}
                    <div className=" space-y-6">
                        <div className="text-center space-x-4">
                            <FaUserCircle size={50} className="text-gray-400 mx-auto" />

                            <div className="mb">
                                <h2 className="text-lg font-semibold md:text-2xl font-sans"><Link href={`/`}>Sumon Paul</Link></h2>
                                <p className="text-sm text-gray-500">Web Developer</p>
                            </div>
                            <div className="flex justify-evenly w-full mt-4">
                                <Link href={`https://facebook.com/sumonpaul55`} target="_blank"><span className="size-8 flex justify-center items-center text-xl text-primary-500 shadow"><FaFacebookF className="flex justify-evenly w-full" /></span></Link>
                                <Link href={`https://linkedin.com/in/sumonpaul5`} target="_blank"><span className="size-8 flex justify-center items-center text-xl text-primary-500 shadow"><FaLinkedin /></span></Link>
                                <Link href={`https://www.instagram.com/sumpaul5`} target="_blank"><span className="size-8 flex justify-center items-center text-xl text-primary-500 shadow"><FaInstagram /></span></Link>
                                <Link href={`https://github.com/sumonpaul55`} target="_blank"><span className="size-8 flex justify-center items-center text-xl text-primary-500 shadow"><FaGithub /></span></Link>
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-2">
                            {isloading ? <LoadingSpinner /> :
                                menuBar?.map((items: Tmenu, idx) => {
                                    if (items?.url === "/dashboard" && user?.role !== "ADMIN") {
                                        return
                                    }
                                    return <Link key={idx} href={`${items?.url}`} className={`cursor-pointer bg-opacity-60 p-2 rounded font-semibold font-sans border hover:border-gray-300 hover:shadow ${pathname === items.url ? "bg-primary-600 text-white" : ""}`}>
                                        {items.name}
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        {
                            !isloading && user ? <h3 className="w-full bg-gray-200 py-1 md:text-lg px-3 rounded-lg">{user?.email}</h3> :
                                <Link href={`/login`} className="w-full py-1 rounded-lg text-center block bg-primary text-white md:text-lg">Login</Link>
                        }
                        <Link href={`/registration`}>dfdsfsdf</Link>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white w-full lg:flex-1 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
