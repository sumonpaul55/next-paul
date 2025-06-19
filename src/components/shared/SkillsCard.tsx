
import Image from 'next/image'
import React from 'react'

const SkillsCard = ({ name, description, image }: { name: string, description: string, image: string }) => {
    return (
        <div className='hover:shadow p-3 md:p-4 shadow-slate-400 border border-slate-300 shadow-sm rounded'>
            <Image src={image} alt={name} className='size-12 object-cover object-center' width={200} height={200} />
            <h3 className='mt-6 font-semibold font-sans text-lg md:text-xl lg:text-2xl'>{name}</h3>
            <p className='text-sm font-sans mt-4'>{description}</p>
        </div>
    )
}

export default SkillsCard