import LoadingDoor from '@/src/components/shared/LoadinDoor'
import Link from 'next/link'
import React from 'react'

const Skills = () => {
    return (
        <>
            <LoadingDoor />


            <div className='bg-gray-100 px-3 py-2'>
                <div className='py-4 flex justify-between'>
                    <h2 className='font-semibold text-lg md:text-xl'>Skills</h2>
                    <Link href={`/dashboard/skills/add-skills`} className='py-1 px-3 text-white rounded-lg bg-primary'>Add Skills</Link>
                </div>
                <div className='bg-white'>
                    <h1 className='p-2 text-lg md:text-xl font-semibold'>Your All Skills</h1>
                    {/* <AllBlogs /> */}
                </div>
            </div>
        </>
    )
}

export default Skills