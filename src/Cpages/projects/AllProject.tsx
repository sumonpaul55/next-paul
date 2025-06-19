"use client"
import Container from '@/src/components/Container'
import ProjectCard from '@/src/components/shared/ProjectsCard'
import SectionTitle from '@/src/components/shared/SectionTitle'
import Skeletons from '@/src/components/shared/Skeleton'
import { useGetProject } from '@/src/hooks/project.hooks'
import { TProjects } from '@/src/types'
import React from 'react'

const AllProject = () => {
    const { data, isLoading } = useGetProject()
    return (
        <Container classname='py-20'>
            <div className='p-3 md:p-5 py-10'>
                {/* <LoadingDoor/> */}
                <SectionTitle title='My Work'>
                    <p className=''>I have worked at multiple time on varius project. All project are build using my existing skills set and few porject are worked with group and almost all are developed by me.</p>
                </SectionTitle>
                {
                    isLoading ? <Skeletons childBox={8} childClass="h-72" parentClasses="grid grid-cols-1 ms:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 bg-transparent"></Skeletons> :
                        <div className='grid grid-cols-1 ms:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5'>
                            {
                                data?.data?.map((item: TProjects, idx: number) => (
                                    <div key={idx} className='shadow p-2 rounded-lg bg-white'>
                                        <ProjectCard _id={item?._id} image={item?.image} liveLink={item?.liveLink} name={item?.name} technology={item?.technology} />

                                    </div>))
                            }
                        </div>
                }
            </div>
        </Container>
    )
}

export default AllProject