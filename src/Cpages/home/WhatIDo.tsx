"use client"
import Container from '@/src/components/Container'
import LoadingSpinner from '@/src/components/shared/LoadingSpinner'
import SectionTitle from '@/src/components/shared/SectionTitle'
import SkillsCard from '@/src/components/shared/SkillsCard'
import { useGetSkills } from '@/src/hooks/skills.hook'
import React from 'react'

const WhatIDo = () => {
    const { data, isLoading } = useGetSkills();
    return (
        <Container classname='py-20'>
            <div>
                <SectionTitle className='' title='What I do'>
                    <p className='md:text-lg'>I have over 2 years of experience building responsive and engaging front-end applications, as well as 1+ year of experience working with the MERN (MongoDB, Express, React, Node.js) stack for full-stack development.
                    </p>
                </SectionTitle>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4'>
                    {isLoading ? <LoadingSpinner /> :
                        data?.data?.map((item: { _id: string; name: string; description: string; image: string }) => (
                            <SkillsCard key={item._id} name={item?.name} description={item?.description} image={item?.image} />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default WhatIDo