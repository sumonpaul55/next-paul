"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TProjects } from '@/src/types';

const ProjectDetails = ({ project }: { project: TProjects }) => {
    const { name, technology, overview, image, liveLink } = project;

    return (
        <div className="min-h-screen bg-gray-100 p-3 md:p-6">
            {/* Project Banner */}
            <motion.div
                className="h-64 md:h-80 bg-cover rounded-lg shadow-lg mb-6 bg-top hover:bg-bottom duration-1000"
                style={{ backgroundImage: `url(${image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-black bg-opacity-30 h-full w-full flex items-center justify-center rounded-lg">
                    <h1 className="text-3xl font-bold text-white text-center">{name}</h1>
                </div>
            </motion.div>

            {/* Project Details */}
            <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                    <div
                        className="text-gray-700 leading-relaxed text-wrap mb-6"
                        dangerouslySetInnerHTML={{ __html: overview }}
                    />
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Technology Stack</h3>
                    <p className="text-gray-700">{technology}</p>
                </motion.div>

                {/* Live Project Link */}
                {liveLink && (
                    <motion.div
                        className="mt-8 flex justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Visit Live Project
                        </a>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
