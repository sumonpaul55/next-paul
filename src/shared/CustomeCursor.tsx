// CustomCursor.tsx
"use client"
import { useEffect, useState } from "react"

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const addCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", addCursor)
        return () => document.removeEventListener("mousemove", addCursor)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
            }}>
            {/* <div className="w-6 h-6 bg-yellow-400 opacity-60 rounded-full mix-blend-difference transition-transform duration-300 ease-in-out"></div> */}
            <div className="w-6 h-6 bg-red-500 opacity-60 rounded-full blur-sm drop-shadow-lg ring-2 ring-red-500 mix-blend-difference transition-transform duration-300"></div>
        </div>
    )
}

export default CustomCursor
