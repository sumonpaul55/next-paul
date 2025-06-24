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
        <>
            <div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`, zIndex: "9999"
                }}>
                {/* <div className="w-6 h-6 bg-yellow-400 opacity-60 rounded-full mix-blend-difference transition-transform duration-300 ease-in-out"></div> */}
                <div className="w-3 h-3 rounded-full" style={{ border: "2px solid blue" }}></div>
            </div>
            <div
                className="fixed top-0 left-0 pointer-events-none duration-300"
                style={{
                    transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`, zIndex: "9999"
                }}>
                {/* <div className="w-6 h-6 bg-yellow-400 opacity-60 rounded-full mix-blend-difference transition-transform duration-300 ease-in-out"></div> */}
                <div className="w-8 h-8 z-50 rounded-full" style={{ border: "2px dashed red" }}></div>
            </div>
        </>

    )
}

export default CustomCursor
