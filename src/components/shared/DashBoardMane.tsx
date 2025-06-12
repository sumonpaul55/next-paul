"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Add icons for menu toggle

const DashBoardManu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Menu Button for Mobile */}
            <button
                className="flex items-center p-2 md:hidden text-primary"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Menu Links */}
            <div
                className={`${isMenuOpen ? "flex" : "hidden"
                    } flex-col md:flex-row md:flex items-center gap-3 bg-white md:bg-transparent absolute md:static top-12 right-0 md:top-0 md:left-0 p-4 md:p-0 md:w-auto shadow-md md:shadow-none z-50 px-4 md:px-0`}
            >
                <Link className="font-semibold text-primary capitalize bg-white px-3 py-1 rounded" href="/dashboard/projects">
                    Projects
                </Link>
                <Link className="font-semibold text-primary capitalize bg-white px-3 py-1 rounded" href="/dashboard/skills">
                    Skills
                </Link>
                <Link className="font-semibold text-primary capitalize bg-white px-3 py-1 rounded" href="/dashboard/post">
                    Post
                </Link>
                <Link className="font-semibold text-primary capitalize bg-white px-3 py-1 rounded" href="/dashboard/messages">
                    messages
                </Link>

            </div>
        </div>
    );
};

export default DashBoardManu;
