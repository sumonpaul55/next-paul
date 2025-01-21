import React, { ReactNode } from 'react'

const SectionTitle = ({ title, className, children, pstyle }: { title: string; className?: string; children?: ReactNode; pstyle?: string }) => {
    return (
        <div className='py-10'>
            <div className='h-16 flex items-center border-l-[6px] border-white pl-4 mb-1'>
                <span className={`${className} font-[700] font-open_sans text-2xl md:text-3xl lg:text-5xl text-white`}>{title}</span>
            </div>
            <div className={`${pstyle} text-gray-700`}>
                {children}
            </div>
        </div>
    )
}

export default SectionTitle