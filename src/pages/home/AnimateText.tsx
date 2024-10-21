"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const AnimateText = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'I"m Front-End developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I"m React.js Developer',
                1000,
                'I"m Next.js Developer',
                1000,
                'I"m Mern-Stack Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em', display: 'inline-block', fontWeight: "800" }}
            repeat={Infinity}
        />
    )
}

export default AnimateText