/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Container from '@/src/components/Container'
import LoadingSpinner from '@/src/components/shared/LoadingSpinner'
import ProjectCard from '@/src/components/shared/ProjectsCard'
import SectionTitle from '@/src/components/shared/SectionTitle'
import { useGetProject } from '@/src/hooks/project.hooks'
import React from 'react'

const ProjectsSection = () => {
    const { data, isLoading } = useGetProject();
    console.log(data?.data)
    return (
        <Container classname='bg-gray-100 py-20'>
            <div>
                <SectionTitle title='Featured Projects'>
                    <p>Here is showing last 6 blogs from my all blogs you can see all of my blogs from the blogs page. If you want to read more blogs please click the blog route. Some of blog written by and some of blogs can be writen by random user</p>
                </SectionTitle>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {isLoading ? <LoadingSpinner /> :
                        data?.data?.slice(0, 6)?.map((items: any, idx: number) => (
                            <ProjectCard key={idx} _id={items?._id} liveLink={items?.liveLink} name={items?.name} image={items?.image} technology={items?.technology} />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default ProjectsSection