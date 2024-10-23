// components/LoadingScreen.tsx
"use client"
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";

interface LoadingScreenProps {
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Set duration for loading screen
        return () => clearTimeout(timeout);
    }, [setLoading]);

    const doorVariants = {
        hidden: { width: "50%" },
        open: {
            width: "0%",
            transition: { duration: 1.5, ease: "easeInOut" },
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            {/* Left Door */}
            <motion.div
                className="bg-gray-800 h-full left-0 top-0 fixed"
                variants={doorVariants}
                initial="hidden"
                animate="open"
            />
            {/* Right Door */}
            <motion.div
                className="bg-gray-800 h-full right-0 top-0 fixed"
                variants={doorVariants}
                initial="hidden"
                animate="open"
            />
        </div>
    );
};

export default LoadingScreen;
