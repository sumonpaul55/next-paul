"use client"
import Container from '@/src/components/Container'
import SectionTitle from '@/src/components/shared/SectionTitle'
import Skeletons from '@/src/components/shared/Skeleton'
import SkillsCard from '@/src/components/shared/SkillsCard'
import { useGetSkills } from '@/src/hooks/skills.hook'
import Link from 'next/link'
import React from 'react'

const WhatIDo = () => {
    const { data, isLoading } = useGetSkills();
    return (
        <div className='container mx-auto'>
            <Container classname='py-20'>
                <div className=''>
                    <SectionTitle className='text-black' title='What I do'>
                        <p className='md:text-lg'>I have over 2 years of experience building responsive and engaging front-end applications, as well as 1+ year of experience working with the MERN (MongoDB, Express, React, Node.js) stack for full-stack development.
                        </p>
                    </SectionTitle>
                    {isLoading ? <Skeletons childBox={8} childClass="h-64" parentClasses="grid grid-cols-1 ms:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 bg-transparent"></Skeletons> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                data?.data?.slice(0, 12)?.map((item: { _id: string; name: string; description: string; image: string }) => (
                                    <SkillsCard key={item._id} name={item?.name} description={item?.description} image={item?.image} />
                                ))
                            }

                        </div>
                    }
                    <Link href="/skills" className='bg-primary text-white py-2 text-center px-6 mt-10 block w-fit mx-auto'>
                        <button type="button">
                            View All Skills
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default WhatIDo