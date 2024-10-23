// components/LoadingSpinner.tsx
"use client"; // Ensure it's a client-side component

import { motion } from "framer-motion";
// import { Spinner } from "@nextui-org/react"; // Optional, from NextUI for extra styling

const LoadingSpinner: React.FC = () => {
    // Framer Motion spinner animation
    const spinnerVariants = {
        rotate: {
            rotate: [0, 360],
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 1.5,
            },
        },
    };

    return (
        <div className="flex mt-10 items-center justify-center">
            {/* Optional NextUI Spinner */}
            {/* <Spinner size="lg" className="text-primary" /> */}

            {/* Framer Motion animated circle (for custom spinner) */}
            <motion.div
                className="border-t-4 border-b-4 border-primary rounded-full w-10 h-10"
                variants={spinnerVariants}
                animate="rotate"
            />
        </div>
    );
};

export default LoadingSpinner;
