
import Image from 'next/image'
import React from 'react'

const SkillsCard = ({ name, description, image }: { name: string, description: string, image: string }) => {
    return (
        <div className='border hover:border-primary hover:shadow-xl p-3 md:p-4 shadow'>
            <Image src={image} alt={name} className='size-12 object-cover object-center' width={200} height={200} />
            <h3 className='my-3 font-semibold font-sans text-lg md:text-xl lg:text-2xl'>{name}</h3>
            <p className='text-sm font-sans text-gray-600'>{description}</p>
        </div>
    )
}

export default SkillsCard