"use client"
import LoadingSpinner from '@/src/components/shared/LoadingSpinner'
import ProjectCard from '@/src/components/shared/ProjectsCard'
import SectionTitle from '@/src/components/shared/SectionTitle'
import { useGetProject } from '@/src/hooks/project.hooks'
import { TProjects } from '@/src/types'
import React from 'react'

const AllProject = () => {
    const { data, isLoading } = useGetProject()
    return (
        <div className='p-3 md:p-5 bg-gray-200 py-10'>
            {/* <LoadingDoor/> */}
           <SectionTitle title='My Work'>
            <p>I have worked at multiple time on varius project. All project are build using my existing skills set and few porject are worked with group and almost all are developed by me.</p>
           </SectionTitle>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className='grid grid-cols-1 ms:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 md:gap-7'>
                        {
                            data?.data?.map((item: TProjects, idx: number) => (
                                <div key={idx} className='shadow p-2 rounded-md bg-white'>
                                    <ProjectCard _id={item?._id} image={item?.image} liveLink={item?.liveLink} name={item?.name} technology={item?.technology} />

                                </div>))
                        }
                    </div>
            }
        </div>
    )
}

export default AllProject