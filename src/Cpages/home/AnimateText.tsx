"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const AnimateText = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Front-End',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'React.js',
                2000,
                'Next.js',
                2000,
                'Mern-Stack',
                2000
            ]}
            wrapper="span"
            speed={2}
            className='animated-text'
            style={{ display: 'inline-block', fontWeight: "600", color: "#3b82f6" }}
            repeat={Infinity}
        />
    )
}

export default AnimateText