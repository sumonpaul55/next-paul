"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({
  _id,
  liveLink,
  name,
  technology,
  image,
}: {
  _id: string;
  liveLink: string;
  name: string;
  technology: string;
  overview?: string;
  image: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-md shadow-xl overflow-hidden group bg-white"
    >
      {/* Project Image */}
      <div
        className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 backdrop-blur-sm">
        <Link
          href={`/projects/${_id}`}
          className="bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm shadow"
        >
          View Details
        </Link>
        <Link
          href={liveLink}
          target="_blank"
          className="bg-primary text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm shadow"
        >
          Live Preview
        </Link>
      </div>

      {/* Project Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-500">{technology}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
