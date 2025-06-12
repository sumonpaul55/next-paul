// components/LoadingScreen.tsx
"use client"
import { motion } from "framer-motion";


const LoadingDoor = () => {


    const doorVariants = {
        hidden: { width: "50%" },
        open: {
            width: "0%",
            transition: { duration: 1.1, ease: "easeInOut" },
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center left-full">
            {/* Left Door */}
            <motion.div
                className="bg-gray-800 h-full left-0 top-0 fixed bg-opacity-80"
                variants={doorVariants}
                initial="hidden"
                animate="open"
            />
            {/* Right Door */}
            <motion.div
                className="bg-gray-800 h-full right-0 top-0 fixed bg-opacity-80"
                variants={doorVariants}
                initial="hidden"
                animate="open"
            />
        </div>
    );
};

export default LoadingDoor;
