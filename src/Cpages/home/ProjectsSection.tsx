/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Container from '@/src/components/Container'
import ProjectCard from '@/src/components/shared/ProjectsCard'
import SectionTitle from '@/src/components/shared/SectionTitle'
import Skeletons from '@/src/components/shared/Skeleton'
import { useGetProject } from '@/src/hooks/project.hooks'
import React from 'react'

const ProjectsSection = () => {
    const { data, isLoading } = useGetProject();
    // console.log(data?.data)
    return (
        <Container classname='md:py-20'>
            <div>
                <SectionTitle title='Featured Projects' className='mb-3'>
                    <p className=''>Here is showing last 6 blogs from my all blogs you can see all of my blogs from the blogs page. If you want to read more blogs please click the blog route. Some of blog written by and some of blogs can be writen by random user</p>
                </SectionTitle>
                {isLoading ? <Skeletons childBox={8} childClass="h-72" parentClasses="grid grid-cols-1 ms:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 bg-transparent"></Skeletons> :
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 mt-7'>
                        {
                            data?.data?.reverse()?.slice(0, 8)?.map((items: any, idx: number) => (
                                <div key={idx} className='bg-white border rounded-xl'>
                                    <ProjectCard _id={items?._id} liveLink={items?.liveLink} name={items?.name} image={items?.image} technology={items?.technology} />
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </Container>
    )
}

export default ProjectsSection