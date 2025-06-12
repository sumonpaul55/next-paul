/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link';
import React, { ReactNode } from 'react'

const MyLink = ({ children, url, target, className, }: { children: ReactNode; url: string, target?: string, className?: string, }) => {
    return (
        <Link href={`${url}`} target={target} className={className}>
            {children}
        </Link>
    )
}

export default MyLink

export const MyLinkHover = ({ children, url, target, className, }: { children: ReactNode; url: string, target?: string, className?: string, }) => {
    return (
        <Link href={`${url}`} target={target} className={`${className} relative inline-block px-2 md:px-6 py-2 font-semibold text-primary border-1 border-primary rounded-lg overflow-hidden transition-colors duration-300 ease-in-out group hover:text-white`}>
            <span className="absolute inset-0 bg-primary transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            <span className="relative z-10"> {children}</span>
        </Link>
    )
}