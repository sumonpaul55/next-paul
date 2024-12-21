"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ _id, liveLink, name, technology, image }: { _id: string; liveLink: string; name: string; technology: string; overview?: string; image: string }) => {
    return (
        <div className='group'>
            <motion.div
                className="relative w-full h-[300px] shadow-lg overflow-hidden bg-cover bg-top hover:bg-bottom duration-1000"
                style={{ backgroundImage: `url(${image})` }}// whileHover={{ scale: 1.05 }}
            >

                <Link href={`/projects/${_id}`} className='bg-primary bg-opacity-80 p-2 w-[50%] absolute text-white -left-full group-hover:left-0 duration-500 bottom-0 hover:bg-blue-700'>
                    Project Details
                </Link>
                <Link href={liveLink} target='_blank' className='bg-primary bg-opacity-80 p-2 w-[50%] absolute text-white  -top-full group-hover:top-[87%] duration-200 left-[50.5%] hover:bg-blue-700'>
                    View Live
                </Link>
            </motion.div>

            <div className="inset-0 bg-black bg-opacity-30 flex items-end justify-between z-50">
                {/* Project Info */}
                <div className="text-left bg-gray-800 w-full px-3">
                    <h2 className="text-white font-bold text-xl line-clamp-1">{name}</h2>
                    <p className="text-gray-300">{technology}</p>
                </div>
                {/* Project Overview - Initially Hidden */}
            </div>
        </div>
    );
};

export default ProjectCard;
