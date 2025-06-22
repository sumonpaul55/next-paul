
import Image from 'next/image'
import React from 'react'

const SkillsCard = ({ name, description, image }: { name: string, description: string, image: string }) => {
    return (
        <div className="bg-slate-50 group relative overflow-hidden z-10 hover:shadow p-3 md:p-4 shadow-slate-400 border border-slate-300 shadow-sm rounded">
            {/* Bubbling effect (initially hidden, expands on hover) */}
            <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 group-hover:animate-bubbleExpand absolute w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-blue-400 to-lime-600 z-0"></span>
            </span>

            {/* Skill Card */}
            <div className=''>
                <Image src={image} alt={name} className='size-12 object-cover object-center' width={200} height={200} />
                <h3 className='mt-6 font-semibold font-sans text-lg md:text-xl lg:text-2xl'>{name}</h3>
                <p className='text-sm font-sans mt-4'>{description}</p>
            </div>
        </div>

    )
}

export default SkillsCard