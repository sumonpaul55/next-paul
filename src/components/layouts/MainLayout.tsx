"use client";
import React, { ReactNode, useState } from "react";
import { FaBars, FaFacebookF, FaGithub, FaInstagram, FaTimes } from "react-icons/fa";
import { menuBar } from "./menuBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa6";
import { Divider, } from "@nextui-org/react";
import { Tmenu } from "@/src/types";
import { useUser } from "@/src/context/user.provider";
// import LoadingSpinner from "../shared/LoadingSpinner";
import me from "../../../public/img/paul.png"
import Image from "next/image"
import { logout } from "@/src/services/authService/user";
import Skeletons from "../shared/Skeleton";
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
                <div className={`bg-slate-950 bg-opacity-95 border-r-1 flex flex-col justify-between border-gray-500 w-[200px] sm:w-[300px] p-3 md:p-6 transition-transform transform fixed lg:static top-0 left-0 h-full lg:h-auto z-50 overflow-y-auto ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                    {
                        isSidebarOpen && <div className={`lg:hidden bg-gray-800 rounded-full size-11 flex justify-center items-center fixed top-2 bg-opacity-70 z-50 ${isSidebarOpen ? "right-2" : "left-2"}`}>
                            <button onClick={toggleSidebar}
                                className="text-lg  text-white focus:outline-none">
                                <FaTimes />
                            </button>
                        </div>
                    }

                    {/* Profile Info */}
                    <div className="space-y-6">
                        <div className="text-center md:space-x-4">
                            {/* <FaUserCircle size={50} className="text-gray-400 mx-auto" /> */}
                            <Image src={me} alt="Sumon Paul" height={300} width={300} className="text-gray-400 size-20 mx-auto rounded-full mb-4" />
                            <div className="mb">
                                <h2 className="text-lg font-semibold md:text-2xl font-sans text-white">
                                    <Link href={`/`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Sumon Paul</Link>
                                </h2>
                                <p className="text-sm text-paragraphText">Web Developer</p>
                            </div>
                            <div className="flex justify-evenly w-full mt-4">
                                <Link href={`https://facebook.com/sumonpaul55`} target="_blank"><span className="size-8 border rounded border-slate-600 flex justify-center items-center text-xl text-paragraphText shadow"><FaFacebookF className="flex justify-evenly w-full" /></span></Link>
                                <Link href={`https://linkedin.com/in/sumonpaul5`} target="_blank"><span className="size-8 border rounded border-slate-600 flex justify-center items-center text-xl text-paragraphText shadow"><FaLinkedin /></span></Link>
                                <Link href={`https://www.instagram.com/sumpaul5`} target="_blank"><span className="size-8 border rounded border-slate-600 flex justify-center items-center text-xl text-paragraphText shadow"><FaInstagram /></span></Link>
                                <Link href={`https://github.com/sumonpaul55`} target="_blank"><span className="size-8 border rounded border-slate-600 flex justify-center items-center text-xl text-paragraphText shadow"><FaGithub /></span></Link>
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-2">
                            {isloading ? <Skeletons childBox={6} childClass="h-10" parentClasses="grid gap-2 bg-transparent">
                            </Skeletons> :
                                menuBar?.map((items: Tmenu, idx) => {
                                    if (items?.url === "/dashboard" && user?.role !== "ADMIN") {
                                        return
                                    }
                                    return <Link key={idx} href={`${items?.url}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`cursor-pointer bg-opacity-60 p-2 rounded font-semibold font-sans border border-slate-600 hover:border-slate-500 hover:shadow ${pathname === items.url ? "bg-slate-700 text-white" : "text-slate-400"}`}>
                                        {items.name}
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                    <div className="">
                        {
                            !isloading && user ? <div className="flex gap-1 justify-between p-1 rounded-lg bg-slate-800 text-paragraphText">
                                <h3 className="w-[70%] py-1 md:text-lg px-3 rounded-lg">{user?.name}</h3>
                                {/* <Image src={`${user?.profilePhoto}`} alt={`${user?.name}`} width={100} height={100} className="size-10 rounded-full" /> */}
                                <button onClick={() => logout()} className="bg-transparent border border-slate-600 px-2 hover:bg-gray-300 rounded-md py-1">Logout</button>
                            </div> :
                                <Link href={`/login`} onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full py-1 rounded-lg text-center block bg-primary text-white md:text-lg">Login</Link>
                        }
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
