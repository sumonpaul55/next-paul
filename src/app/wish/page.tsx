// "use client"
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function Wish() {
//     const particlesInit = useCallback(async (engine) => {
//         await loadFull(engine); // Initialize tsparticles instance
//     }, []);

//     const particlesLoaded = useCallback(async (container) => {
//         // await console.log(container); // Log for debugging
//     }, []);

//     return (
//         <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-purple-900 text-white">
//             {/* Particles.js Background */}
//             <Particles
//                 id="tsparticles"
//                 init={particlesInit}
//                 loaded={particlesLoaded}
//                 options={{
//                     background: {
//                         color: {
//                             value: "#000",
//                         },
//                     },
//                     fpsLimit: 60,
//                     interactivity: {
//                         events: {
//                             onClick: { enable: true, mode: "push" },
//                             onHover: { enable: true, mode: "repulse" },
//                             resize: true,
//                         },
//                         modes: {
//                             push: { quantity: 4 },
//                             repulse: { distance: 100, duration: 0.4 },
//                         },
//                     },
//                     particles: {
//                         color: { value: "#ffffff" },
//                         links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
//                         collisions: { enable: true },
//                         move: { direction: "none", enable: true, outModes: "bounce", random: false, speed: 2, straight: false },
//                         number: { density: { enable: true, area: 800 }, value: 80 },
//                         opacity: { value: 0.5 },
//                         shape: { type: "circle" },
//                         size: { value: { min: 1, max: 5 } },
//                     },
//                     detectRetina: true,
//                 }}
//             />

//             {/* New Year Message */}
//             <div className="text-center">
//                 <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse">
//                     🎉 Happy New Year 2025 🎉
//                 </h1>
//                 <p className="text-xl md:text-2xl">
//                     Wishing you a year filled with joy, success, and happiness!
//                 </p>
//             </div>
//         </div>
//     );
// }

import React from 'react'

const page = () => {
    return (
        <div>page</div>
    )
}

export default page